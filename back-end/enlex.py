from flask import Flask, request
from connection import Connection

CORS(app, support_credentials=True)
app.config['CORS_HEADERS'] = 'Content-Type'

# Initialize Flask object
app = Flask(__name__)

# Create database connection
DB = Connection()

# Home page route:
@app.route("/")
def hello():
    return "Hello World" # dummy example

# Signin route:
@app.route("/signin", methods=["POST"])
def signin():
    # Get the user & pass from the database & check if it's a match
    user = request.form['user']
    entered_pass = request.form['password']

# Signup route
@app.route("/signup", methods=["POST"])
def signup():
    pass


if __name__ == '__main___':
    app.run()
