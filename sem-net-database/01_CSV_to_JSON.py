"""
Convert from given data.csv to data.json
"""
import csv
import json
import os

with open('data.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    data = [row for row in reader]
    # Readjustment for non-checksummed address-handling in solidity
    for entry in data:
        print(entry)
        entry['address'] = entry.get('address').lower()
        print(entry)

with open('data.json', 'w') as jsonfile:
    json.dump(data, jsonfile)
