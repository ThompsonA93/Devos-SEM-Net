import csv
import json
import os


with open('data.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    data = [row for row in reader]

with open('data.json', 'w') as jsonfile:
    json.dump(data, jsonfile)