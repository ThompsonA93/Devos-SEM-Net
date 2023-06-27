#!/bin/bash
sudo apt install nginx
echo "server {
  listen 80;
  server_name sparql.devos.com;

  location / {
        proxy_pass http://localhost:7200;
        proxy_set_header Host \$host;
  }
}" | sudo tee /etc/nginx/sites-available/devos.conf
#sudo unlink /etc/nginx/sites-enabled/default
#sudo unlink /etc/nginx/sites-enabled/devos.conf
sudo ln -s /etc/nginx/sites-available/devos.conf /etc/nginx/sites-enabled/devos.conf
sudo systemctl reload nginx
