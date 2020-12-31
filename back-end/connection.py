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
        self.createConnection()

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
        hashed_pass = salt + hashed_pass

        add_user = "INSERT INTO users(first_name, last_name, email, salt, hashed_pass) VALUES (%s, %s, %s, %s, %s)"
        user_data = (first_name, last_name, email, salt, hashed_pass)
        self.cursor.execute(add_user, user_data)
        self.cursor.close()
