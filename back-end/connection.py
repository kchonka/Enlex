# Database instantiation class
import mysql.connector
import os
import bcrypt
from errors import *

class Connection:
    def __init__(self, host, user, password, db):
        self.host = host
        self.user = user
        self.password = password
        self.db = db
        self.createConnection() #open a connection to the database, evoke internal function

    def createConnection(self):
        self.cnx = mysql.connector.connect( host = self.host, user=self.user, password = self.password, database= self.db)
        self.cursor = self.cnx.cursor()
        self.cnx._open_connection() # doesn't work without this part; necessary

    # Add a user to the User database
    def addUser(self, first_name, last_name, email, entered_pass):
        # First check if user exists
        exists = self.checkUserExists(email)
        if exists is False:
            entered_pass = entered_pass.encode("utf-8")
            salt = bcrypt.gensalt()
            hashed_pass = bcrypt.hashpw(entered_pass, salt).decode('utf-8')
            # Decode from bytes to string - password getting stored as a string in the DB:
            salt = salt.decode('utf-8')
            # Store in the database
            add_user = "INSERT INTO users(first_name, last_name, email, salt, hashed_pass) VALUES (%s, %s, %s, %s, %s)"
            user_data = (first_name, last_name, email, salt, hashed_pass)
            self.cursor.execute(add_user, user_data)
        else:
            raise userAlreadyExists(email)


    # Check if user already exists in the database:
    # Returns True/False for existence 
    def checkUserExists(self, email):
        # Check if the user exists in the database by trying to query the first/last name
        get_user = "SELECT first_name, last_name FROM users WHERE email = %s"
        self.cursor.execute(get_user, (email,)) # trailing comma is necessary
        # Extract the contents of the query
        firstname = None
        lastname = None
        for values in self.cursor:
            (firstname, lastname) = values
        
        # Check if the first or last name is in the database
        if firstname is not None or lastname is not None:
            return True     # user exists
        else:
            return False    # user doesn't exist


    # Checks the entered password for a user email against the hashed one in the databse
    # Returns true if it's valid (authenticated), false if incorrect
    def verifyPassword(self, email, entered_pass):
        # Get the stored password & salt for the entered email:
        get_user = "SELECT salt, hashed_pass FROM users WHERE email = %s"
        self.cursor.execute(get_user, (email,)) # trailing comma is necessary
        # Extract the contents of the query
        stored_pass = None
        salt = None
        for values in self.cursor:
            (salt, stored_pass) = values
        # Hash the entered_pass and compare
        entered_pass = entered_pass.encode("utf-8")
        salt = salt.encode("utf-8")
        hashed_pass = bcrypt.hashpw(entered_pass, salt).decode("utf-8")
        # Return the result of the comparison (True or False)
        return hashed_pass == stored_pass


    # Close the connection to the database
    def closeConnection(self):
        self.cursor.close()
