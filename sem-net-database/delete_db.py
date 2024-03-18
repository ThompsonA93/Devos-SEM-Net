"""
Drop whole collection. Useful only for resetting a database during development
"""
import os
from os.path import join, dirname
from dotenv import load_dotenv

from pymongo import MongoClient


check = input("Are you sure to drop the whole collection? Enter Y.\n")

if check == "Y":
    dotenv_path = join(dirname(__file__), '.env')
    load_dotenv(dotenv_path)
    MONGODB_URI = os.environ.get("MONGODB_URI")
    mdbclient = MongoClient(MONGODB_URI) 
    db = mdbclient["test"]["addresses"]
    db.drop() 
    print("Dropped collection", db.full_name)
else:
    print("Exit script without dropping collection")