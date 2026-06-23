$ExportPath = ".\ibIdFix_Report.csv"
# Regex basique (inspiré de IdFix)
$InvalidChars = '[^a-zA-Z0-9\.\-\@\+\:]'

function Test-InvalidCharacters {
    param($Value)
    if ($null -eq $Value) { return $false }
    return ($Value -match $InvalidChars)}

function Clean-Value {
    param($Value)
    if ($null -eq $Value) { return $null }
    return ($Value -replace $InvalidChars, "")}

function Get-DuplicateValues {
    param($Users, $Attribute)
    $dup = $Users | Group-Object -Property $Attribute | Where-Object { $_.Count -gt 1 }
    return $dup}

function Is-TechnicalMailbox {
    param($User)
    return ($User.proxyAddresses -like "SMTP:SystemMailbox*" -or $User.mail -like "SystemMailbox*")}

# Collecte des utilisateurs
Write-Host "Collecte des objets AD..."
$Users = Get-ADUser -Filter * -Properties UserPrincipalName, ProxyAddresses, mail
$Report = @()

# Analyse des attributs
foreach ($user in $Users) { 
    if (Is-TechnicalMailbox $user) { continue } #Compte de boite Exchange
    if (Test-InvalidCharacters $user.UserPrincipalName) { # --UPN--
        $suggestedUPN = Clean-Value $user.UserPrincipalName
        $Report += [pscustomobject]@{
            Issue          = "InvalidCharacters"
            SamAccountName = $user.SamAccountName
            Attribute      = "UserPrincipalName"
            Value          = $user.UserPrincipalName
            SuggestedValue = $suggestedUPN}}

    if (Test-InvalidCharacters $user.mail) { # --MAIL--
        $suggestedMail = Clean-Value $user.mail
        $Report += [pscustomobject]@{
            Issue          = "InvalidCharacters"
            SamAccountName = $user.SamAccountName
            Attribute      = "mail"
            Value          = $user.mail
            SuggestedValue = $suggestedMail}}

    foreach ($proxy in $user.ProxyAddresses) { # --PROXY ADDRESSES--
        if (Test-InvalidCharacters $proxy) {
            $suggestedProxy = Clean-Value $proxy
            $Report += [pscustomobject]@{
                Issue          = "InvalidCharacters"
                SamAccountName = $user.SamAccountName
                Attribute      = "proxyAddresses"
                Value          = $proxy
                SuggestedValue = $suggestedProxy
            }}}}

# Recherche de doublons
Write-Host "Analyse des doublons..."
$dupUPN = Get-DuplicateValues $Users "UserPrincipalName"
foreach ($group in $dupUPN) {
    foreach ($user in $group.Group) {
        $Report += [pscustomobject]@{
            Issue          = "Duplicate"
            SamAccountName = $user.SamAccountName
            Attribute      = "UserPrincipalName"
            Value          = $user.UserPrincipalName
            SuggestedValue = "A corriger manuellement"
        }}}

# Export du rapport
$Report | Export-Csv -Path $ExportPath -NoTypeInformation -Encoding UTF8
Write-Host "Rapport généré : $ExportPath"
$Report | out-gridview