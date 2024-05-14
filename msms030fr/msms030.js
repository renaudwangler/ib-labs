//Récupération des donms de domaine, si stockés dans la base du navigateur
if (localStorage.getItem('msms030-onmicrosoftDomain')) { onmicrosoftDomain = localStorage.getItem('msms030-onmicrosoftDomain') }
else { onmicrosoftDomain = 'M365xxxxxx' }
if (localStorage.getItem('msms030-godeployDomain')) { godeployDomain = localStorage.getItem('msms030-godeployDomain') }
else { godeployDomain = 'labxxxxxx' }

function updateDomains() {
    document.body.innerHTML = document.body.innerHTML.replace(/\[onmicrosoftDomain\]/g,onmicrosoftDomain)
    document.body.innerHTML = document.body.innerHTML.replace(/\[godeployDomain\]/g,godeployDomain) }

function newDomains() {
   console.log(document.getElementById('onmicrosoftDomainNew').value)
   console.log(document.getElementById('godeployDomainNew').value)
   location.reload()}

//CRéation du div de saisie des domaines
domainInput = document.createElement('div')
domainInput.style.cssText = 'width:50%; background:white; border:solid 2px blue; position:fixed; top:25%; right:0;'

domainInputTitle = document.createElement('div')
domainInputTitle.style.cssText = 'width:100%; height:25px; background: blue;color: white; font-weight:bold;'
domainInputTitle.innerHTML = '&nbsp;Noms des domaines <div style="width:21px; height:21px; line-height:21px; position:absolute; top:2px; right:2px; background:red; display:block; text-align:center; cursor: pointer;" onclick = "domainInput.style.display=\'none\'">X</div>'
domainInput.appendChild(domainInputTitle)

domainInputContent = document.createElement('div')
domainInputContent.style.cssText = 'padding: 5px'
domainInputContent.innerHTML = 'Ici, vous pouvez saisir les noms de domaine de votre instance d\'atelier afin de vous en faciliter la réalisation.<br/><ul><li>Domaine original Microsoft 365 :<br/><input type="text" id="onmicrosoftDomainNew" value="' + onmicrosoftDomain + '">.onmicrosoft.com</li><br/><li>Domaine de l\'atelier goDeploy :<br/><input type="text" id="godeployDomainNew" value="' + godeployDomain + '">.godeploylabs.com <a href="#" onclick="newDomains()"><img src="enterKey.png"></a></li></ul>'

//localStorage.setItem('msms030-onmicrosoftDomain')

domainInput.appendChild(domainInputContent)


document.addEventListener('DOMContentLoaded', function () { updateDomains(); document.body.appendChild(domainInput) })