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
        entered_pass = entered_pass.encode("utf-8")
        salt = bcrypt.gensalt()
        hashed_pass = bcrypt.hashpw(entered_pass, salt).decode('utf-8')
        # Decode from bytes to string:
        salt = salt.decode('utf-8')
        # Store in the database
        add_user = "INSERT INTO users(first_name, last_name, email, salt, hashed_pass) VALUES (%s, %s, %s, %s, %s)"
        user_data = (first_name, last_name, email, salt, hashed_pass)
        self.cursor.execute(add_user, user_data)


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
        # Return the result of the comparison (True or false)
        return hashed_pass == stored_pass


    # Close the connection to the database
    def closeConnection(self):
        self.cursor.close()
