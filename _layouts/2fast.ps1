#Récupération automatique dernière version de 2fast
Start-BitsTransfer -source ((Invoke-WebRequest 'https://api.github.com/repos/2fast-team/2fast/releases/latest') | ConvertFrom-Json).assets.browser_download_url -Destination './2fast.zip'
Expand-Archive '.\2fast.zip' -DestinationPath .\2fast -Force
#Activation du "sideloading" d'applications sur le poste
if (Get-ItemProperty -path 'HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\AppModelUnlock' -Name 'AllowAllTrustedApps') {Set-ItemProperty -Path 'HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\AppModelUnlock' -Name 'AllowAllTrustedApps' -Value 1}
else {New-ItemProperty -path 'HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\AppModelUnlock' -Name 'AllowAllTrustedApps' -PropertyType Dword -Value 1}
#Installation de l'application
.\2fast\Install.ps1