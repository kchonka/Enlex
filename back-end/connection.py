# Database instantiation class
import mysql.connector
import hashlib
import os
import binascii

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
        salt = hashlib.sha256(os.urandom(60)).hexdigest().encode('ascii')
        hashed_pass = hashlib.pbkdf2_hmac('sha512', entered_pass.encode('utf-8'), salt, 100000)
        hashed_pass = binascii.hexlify(hashed_pass)
        #hashed_pass = (salt + hashed_pass).decode('ascii')
        #hashed_pass = salt + hashed_pass

        add_user = "INSERT INTO users(first_name, last_name, email, salt, hashed_pass) VALUES (%s, %s, %s, %s, %s)"
        user_data = (first_name, last_name, email, salt, hashed_pass)
        self.cursor.execute(add_user, user_data)


    # Verify that an entered_pass matches the one in the database
    def verifyPassword(self, email, entered_pass):
        # Get the stored password for that email
        get_user = "SELECT hashed_pass FROM users WHERE email = %s"
        self.cursor.execute(get_user, (email,)) # trailing comma is necessary

        # Extract the contents of the query
        stored_pass = None
        for values in self.cursor:
            (stored_pass,) = values
        salt = stored_pass[:64]

        # Hash the entered pass & see if it matches
        entered_hash = hashlib.pbkdf2_hmac('sha512', entered_pass.encode('utf-8'), salt.encode('ascii'), 100000)
        entered_hash = binascii.hexlify(entered_hash).decode('ascii')
        entered_hash = salt + entered_hash
        return salt+entered_hash == salt+stored_pass

    # Close the connection to the database
    def closeConnection(self):
        self.cursor.close()
