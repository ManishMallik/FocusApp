import logging
from flask import Flask

api = Flask(__name__)

@api.route('/profile')
def my_profile():
    try:
        response_body = {
            "name": "Nagato",
            "about": "Hello! I'm a full stack developer that loves python and javascript"
        }
        return response_body
    except Exception as e:
        logging.error("An error occurred: %s", e)
        return {"error": "An error occurred"}, 500  # Return an error response with status code 500
