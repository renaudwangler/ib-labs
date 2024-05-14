//Récupération des donms de domaine, si stockés dans la base du navigateur
if (localStorage.getItem('msms030-onmicrosoftDomain')) { onmicrosoftDomain = localStorage.getItem('msms030-onmicrosoftDomain') }
else { onmicrosoftDomain = 'M365xxxxxx' }
if (localStorage.getItem('msms030-godeployDomain')) { godeployDomain = localStorage.getItem('msms030-godeployDomain') }
else { godeployDomain = 'labxxxxxx' }

//CRéation du div de saisie des domaines
domainInput = document.createElement('div')
domainInput.style.cssText = 'width:50%; height:50%; background:white; border:solid 2px blue; position:fixed; top:25%; left:25%;'

domainInputTitle = document.createElement('div')
domainInputTitle.style.cssText = 'width:100%; height:25px; background: blue;color: white; font-weight:bold;'
domainInputTitle.innerHTML = '&nbsp;Noms des domaines'
domainInput.appendChild(domainInputTitle)

domainInputClose = document.createElement('a')
domainInputClose.style.cssText = 'width:21px; height:21px; position:absolute; top:2px; right:2px; background:red; display:inline-block; vertical-align:middle'
domainInputClose.appendChild(document.createTextNode('x'))
domainInputClose.onClick = function() {domainInput.style.display='none'}
domainInputTitle.appendChild(domainInputClose)

domainInputContent = document.createElement('div')
domainInputContent.style.cssText = 'padding: 5px'
domainInputContent.innerHTML = 'Ici, vous pouvez saisir les noms de domaine de votre instance d\'atelier afin de vous en faciliter la réalisation.<br/><ul><li>Domaine original Microsoft 365 : ' + onmicrosoftDomain + '.onmicrosoft.com</li><li>Domaine de l\'atelier goDeploy : ' + godeployDomain + '.godeploylabs.com</li></ul>'
domainInput.appendChild(domainInputContent)


document.addEventListener('DOMContentLoaded', function () { document.body.appendChild(domainInput) })