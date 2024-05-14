//Récupération des donms de domaine, si stockés dans la base du navigateur
if (localStorage.getItem('msms030-onmicrosoftDomain')) { onmicrosoftDomain = localStorage.getItem('msms030-onmicrosoftDomain') }
else { onmicrosoftDomain = 'M365xxxxxx' }
if (localStorage.getItem('msms030-godeployDomain')) { godeployDomain = localStorage.getItem('msms030-godeployDomain') }
else { godeployDomain = 'labxxxxxx' }

//CRéation du div de saisie des domaines
var domainInput = document.createElement('div')
domainInput.style.width = '50%'
domainInput.style.height = '50%'
domainInput.style.background = 'white'
domainInput.style.border = 'solid 2px blue'
domainInput.style.position = 'absolute'
domainInput.style.bottom = '0'
domainInput.style.left = '25%'

domainInputTitle = document.createElement('div')
domainInputTitle.style.width = '100%'
domainInputTitle.style.height = '25px'
domainInputTitle.style.background = 'blue'
domainInputTitle.style.color = 'white'
domainInputTitle.style.fontWeight = 'bold'
domainInputTitle.innerHTML = 'Noms des domaines'
domainInput.appendChild(domainInputTitle)
domainInputContent = document.createElement('div')
domainInputContent.innerHTML = 'Noms des domaines</div>Ici, vous pouvez saisir les noms de domaine de votre instance d\'atelier afin de vous en faciliter la réalisation.<br/>Domaine original Microsoft 365 : '+onmicrosoftDomain+'.onmicrosoft.com'
domainInput.appendChild(domainInputContent)

document.addEventListener('DOMContentLoaded',function(){document.body.appendChild(domainInput)})