#A lancer en admin
#Récupération automatique dernière version de 2fast
Start-BitsTransfer -source ((Invoke-WebRequest 'https://api.github.com/repos/2fast-team/2fast/releases/latest') | ConvertFrom-Json).assets.browser_download_url -Destination './2fast.zip'
Expand-Archive '.\2fast.zip' -DestinationPath .\2fast -Force
#Activation du "sideloading" d'applications sur le poste
$devKey = 'HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\AppModelUnlock'
$devVal = 'AllowDevelopmentWithoutDevLicense'
if (Get-ItemProperty -path $devKey -Name $devVal -errorAction silentlyContinue) {Set-ItemProperty -Path $devKey -Name $devVal -Value 1}
else {New-ItemProperty -path $devKey -Name $devVal -PropertyType Dword -Value 1}
#Installation de l'application
.\2fast\Install.ps1