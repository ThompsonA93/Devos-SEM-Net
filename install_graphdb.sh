#!/bin/bash
# Note: The repository for graphdb only contains the downloaded zip-file "graphdb-10.2.1-dist.zip".
# Download software and set accordingly to your setup
git submodule update --init --recursive
sudo apt-get install unzip
cd graphdb
unzip graphdb-10.2.1-dist.zip
