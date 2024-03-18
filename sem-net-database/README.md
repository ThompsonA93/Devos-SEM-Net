# SEM-Net-Database

Collection of scripts and mocked data to setup backend database.

| Environment      | Version          |
| ---------------- | ---------------- |
| Operating System | Linux 6.5.0-25-generic |
| Python | 3.10.12 |


| Dependencies      | Version          |
| ---------------- | ---------------- |
| pymongo | 4.6.2 |
| python-dotenv | 0.19.2 |



## Installation

Setup a MongoDB-Server manually, or utilize MongoDB Atlas.

Store the URL to the MongoDB-Server within a `.env`.

## Execution


1. Following the predefined Schema (see [Devos-SEM-Net/README.md](https://github.com/ThompsonA93/Devos-SEM-Net/blob/main/devos-sem-net/README.md)), manually setup records. You can create records either via CSV or JSON, with files named `data`. 
2. (When using CSV) Convert `data.csv` to `data.json` by running `python3 CSV_to_JSON.py`.
3. Push `data.json` to the predefined MongoDB-Server using `python3 JSON_to_DB.py`.

The optional script `delete_db.py` has been added if a clean start of the database is deemed necessary.
