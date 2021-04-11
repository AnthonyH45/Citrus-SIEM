#!/bin/bash

HOST="192.168.1.71"
PORT="8000"

while true
do
    hostname=$(hostnamectl | grep "Static hostname" | awk 'BEGIN{FS=OFS=" ";}{print $3;}')
    uptime=$(uptime | awk 'BEGIN{FS=OFS=",";}{print $1;}' | xargs)
    ips=$(curl -s https://ipinfo.io/ip)
    osvar=$(lsb_release -d | awk 'BEGIN{FS=OFS=":";}{print $2;}' | xargs)
    release=$(lsb_release --r | awk 'BEGIN{FS=OFS=":";}{print $2;}'# | xargs)
    packages=$(dpkg --list | wc --lines)

    curl --header "Content-Type: application/json" -d "{\"hostname\":\"$(hostname)\", \"os\":\"$osvar\", \"uptime\":\"$uptime\", \"release\":\"$release\", \"packages\":$packages}" -X POST http://$HOST:$PORT/endpoint

    sleep 30
done

