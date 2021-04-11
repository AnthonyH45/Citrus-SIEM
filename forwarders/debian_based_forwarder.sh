#!/bin/bash

HOST="10.0.0.3"
PORT="8080"

while true
do
    hostname=$(hostname) 
    uptime=$(uptime | awk 'BEGIN{FS=OFS=",";}{print $1;}' | xargs)
    ips=$(curl -s https://ipinfo.io/ip)
    osvar=$(lsb_release -d | awk 'BEGIN{FS=OFS=":";}{print $2;}' | xargs)
    services=$(netstat -tulpn)
    release=$(lsb_release --r | awk 'BEGIN{FS=OFS=":";}{print $2;}' | xargs)
    packages=$(dpkg --list | wc --lines)

    curl --header "Content-Type: application/json" -d \
        "{\"hostname\":\"$(hostname)\", \"os\":\"$osvar\", \"uptime\":\"$uptime\", \"release\":\"$release\", \"packages\":$packages, \"on\":\"1\"}" \
        -X POST http://$HOST:$PORT/endpoint

    curl -X POST -H "Content-Type: text/plain" -d \
        "`netstat -tulpn`" http://$HOST:$PORT/recvListeningPorts

    sleep 10
done

