$RECV_HOST = "192.168.1.71"
$RECV_PORT = "8000"
$URL = 'http://' + $RECV_HOST + ':' + $RECV_PORT + '/endpoint'

while($true) {
    $D_HOSTNAME = [System.Net.Dns]::GetHostName()
    $D_UPTIME = systeminfo | find "System Boot Time:"
    $IP = $(Resolve-DnsName -Name myip.opendns.com -Server 208.67.222.220).IPAddress
    $D_OS = (Get-WmiObject -class Win32_OperatingSystem).Caption
    $D_RELEASE = (Get-ItemProperty -Path c:\windows\system32\hal.dll).VersionInfo.FileVersion
    $D_PACKAGES = "-1"

    $params = @{"hostname"="$D_HOSTNAME";
    "uptime"="$D_UPTIME";
    "ip"="$IP";
    "os"="$D_OS";
    "release"="$D_RELEASE";
    "packages"=1;
    }

    Invoke-Expression -Command 'Invoke-WebRequest -Uri $URL -Method POST -Body ($params|ConvertTo-Json) -ContentType "application/json"'
    Start-Sleep -s 30
}
