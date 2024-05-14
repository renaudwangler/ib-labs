function updateDomains() {
    //Récupération des donms de domaine, si stockés dans la base du navigateur
    if (localStorage.getItem('msms030-onmicrosoftDomain')) { onmicrosoftDomain = localStorage.getItem('msms030-onmicrosoftDomain') }
    else { onmicrosoftDomain = 'M365xxxxxx' }
    if (localStorage.getItem('msms030-godeployDomain')) { godeployDomain = localStorage.getItem('msms030-godeployDomain') }
    else { godeployDomain = 'labxxxxxx' }
    //CRéation du div de saisie des domaines
    if (typeof domainInput === 'undefined') {
        domainInput = document.createElement('div')
        domainInput.style.cssText = 'width:50%; background:white; border:solid 2px blue; position:fixed; top:25%; right:0; display:none;'
        domainInput.innerHTML = '<div style="width:100%; height:25px; background: blue;color: white; font-weight:bold">&nbsp;Noms des domaines <div style="width:21px; height:21px; line-height:21px; position:absolute; top:2px; right:2px; background:red; display:block; text-align:center; cursor: pointer;" onclick = "domainInput.style.display=\'none\'">X</div></div><div style="padding: 5px;">Ici, vous pouvez saisir les noms de domaine de votre instance d\'atelier afin de vous en faciliter la réalisation.<br/><ul><li>Domaine original Microsoft 365 :<br/>(peut être trouvé dans le nom de domaine de l\'administrateur "Office 365 Teannt Credentials" dans l\'onglet "Home" du volet de gauche de votre environnement goDeploy)<br/><input type="text" id="onmicrosoftDomainNew" value="' + onmicrosoftDomain + '">.onmicrosoft.com</li><br/><li>Domaine de l\'atelier goDeploy :<br/>(peut être trouvé sous le nom "Lab Domain" dans l\'onglet "DNS" du volet de gauche de votre environnement goDeploy)<br/><input type="text" id="godeployDomainNew" value="' + godeployDomain + '">.godeploylabs.com <a href="#" onclick="newDomains()"><img src="enterKey.png"></a><br/></li></ul></div>'}
    document.body.innerHTML = document.body.innerHTML.replace(/\[onmicrosoftDomain\]/g,onmicrosoftDomain)
    document.body.innerHTML = document.body.innerHTML.replace(/\[godeployDomain\]/g,godeployDomain) }

function newDomains() {
    localStorage.setItem('msms030-onmicrosoftDomain',document.getElementById('onmicrosoftDomainNew').value)
    localStorage.setItem('msms030-godeployDomain',document.getElementById('godeployDomainNew').value)
    updateDomains()
    domainInput.style.display = 'none'}

document.addEventListener('DOMContentLoaded', function () { updateDomains(); document.body.appendChild(domainInput) })