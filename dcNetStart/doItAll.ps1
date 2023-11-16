$ADdomain = Get-ADDomain -Current LocalComputer
$DCName = (Get-ADDomainController).HostName.ToLower()
if ((Invoke-Command -ComputerName $DCName -ScriptBlock { Get-NetConnectionProfile }).NetworkCategory -ne 'DomainAuthenticated') {
    Write-Host "Nettoyage du réseau de $DCName." -ForegroundColor Yellow
    Invoke-Command -ComputerName (Get-ADDomainController).HostName.ToLower() -ScriptBlock {
        Get-NetAdapter|Restart-NetAdapter
        while((Get-NetConnectionProfile).NetworkCategory -ne 'DomainAuthenticated') { Start-Sleep -Seconds 1 }}
} else { Write-Host "Réseau de $DCName déjà en mode domaine." -ForegroundColor Green}
Start-Sleep -Seconds 10
Get-NetAdapter|Restart-NetAdapter
while((Get-NetConnectionProfile).NetworkCategory -ne 'DomainAuthenticated') { Start-Sleep -Seconds 1 }
(Get-ADComputer -Filter * -SearchBase $ADDomain.ComputersContainer).DNSHostName.Tolower() | Where DNSHostName -NotLike "$($ENV:ComputerName)*" | Where DNSHostName -NotLike $DCName | ForEach-Object {
    $compName = $_
    try { 
        Restart-Computer -ComputerName $compName -Force -ErrorAction Stop
        Write-Host "Redémarrage de $compName." -ForegroundColor Green }
    Catch { Write-Host "Impossible de redémarrer $compName." -ForegroundColor Red }}
if ($DCName -NotLike "$($env:COMPUTERNAME)*") { Write-Host "Pour finir, n'oubliez pas de redemarrer la presente machine !!" -ForegroundColor Yellow }
