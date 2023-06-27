#!/bin/bash
# Depends on install_nginx.sh
# BUGGY does not quite work yet

sudo openssl req -x509 -nodes -newkey rsa:4096 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt -sha256 -days 365
sudo openssl dhparam -out /etc/nginx/dhparam.pem 4096

echo "ssl_certificate /etc/ssl/certs/nginx-selfsigned.crt;
ssl_certificate_key /etc/ssl/private/nginx-selfsigned.key;

ssl_protocols TLSv1.3;
ssl_prefer_server_ciphers on;
ssl_dhparam /etc/nginx/dhparam.pem; 
ssl_ciphers EECDH+AESGCM:EDH+AESGCM;
ssl_ecdh_curve secp384r1;
ssl_session_timeout  10m;
ssl_session_cache shared:SSL:10m;
ssl_session_tickets off;
ssl_stapling on;
ssl_stapling_verify on;
resolver 8.8.8.8 8.8.4.4 valid=300s;
resolver_timeout 5s;

add_header X-Frame-Options DENY;
add_header X-Content-Type-Options nosniff;
add_header X-XSS-Protection \"1; mode=block\";" | sudo tee /etc/nginx/snippets/self-signed.conf

echo "server {
  server_name sparql.devos.com;
  listen 80;
  listen 443 ssl;
  listen [::]:443 ssl;

  include snippets/self-signed.conf;
  include snippets/ssl-params.conf;

  location / {
        proxy_pass https://localhost:7200;
        proxy_set_header Host \$host;
  }
}" | sudo tee /etc/nginx/sites-available/devos.conf

sudo systemctl reload nginx
