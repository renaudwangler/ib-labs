//Récupération des donms de domaine, si stockés dans la base du navigateur
if (localStorage.getItem('msms030-onmicrosoftDomain')) { onmicrosoftDomain = localStorage.getItem('msms030-onmicrosoftDomain') }
else { onmicrosoftDomain = 'M365xxxxxx' }
if (localStorage.getItem('msms030-godeployDomain')) { godeployDomain = localStorage.getItem('msms030-godeployDomain') }
else { godeployDomain = 'labxxxxxx' }

//CRéation du div de saisie des domaines
domainInput = document.createElement('div')
domainInput.style.cssText = 'width:50%; height:50%; background:white; border:solid 2px blue; position:fixed; top:25%; left:25%'


domainInputTitle = document.createElement('div')
domainInputTitle.style.width = '100%'
domainInputTitle.style.height = '25px'
domainInputTitle.style.background = 'blue'
domainInputTitle.style.color = 'white'
domainInputTitle.style.fontWeight = 'bold'
domainInputTitle.innerHTML = '&nbsp;Noms des domaines'
domainInput.appendChild(domainInputTitle)

domainInputContent = document.createElement('div')
domainInputContent.style.padding = '5px'
domainInputContent.innerHTML = 'Ici, vous pouvez saisir les noms de domaine de votre instance d\'atelier afin de vous en faciliter la réalisation.<br/><ul><li>Domaine original Microsoft 365 : ' + onmicrosoftDomain + '.onmicrosoft.com</li><li>Domaine de l\'atelier goDeploy : ' + godeployDomain + '.godeploylabs.com</li></ul>'

domainInput.appendChild(domainInputContent)

document.addEventListener('DOMContentLoaded', function () { document.body.appendChild(domainInput) })