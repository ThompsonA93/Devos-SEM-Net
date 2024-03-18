"""
Exports local data.json to MongoDB connecting via .ENV-specified URL
"""
import os
from os.path import join, dirname
from dotenv import load_dotenv

from pymongo import MongoClient
import json 

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)
MONGODB_URI = os.environ.get("MONGODB_URI")

mdbclient = MongoClient(MONGODB_URI) 
db = mdbclient["test"]["addresses"]

with open('data.json') as file:
    file_data = json.load(file)

if isinstance(file_data, list):
    db.insert_many(file_data)  
else:
    db.insert_one(file_data)

print("Pushed data to database")
for record in db.find():
  print(record) 