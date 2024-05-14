//Récupération des donms de domaine, si stockés dans la base du navigateur
if (localStorage.getItem('msms030-onmicrosoftDomain')) { onmicrosoftDomain = localStorage.getItem('msms030-onmicrosoftDomain') }
else { onmicrosoftDomain = 'M365xxxxxx' }
if (localStorage.getItem('msms030-godeployDomain')) { godeployDomain = localStorage.getItem('msms030-godeployDomain') }
else { godeployDomain = 'labxxxxxx' }

//CRéation du div de saisie des domaines
var domainInput = document.createElement('div')
domainInput.width = '50%'
domainInput.height = '50%'
domainInput.background = 'white';
domainInput.border = 'solid 2px blue'

document.body.appendChild(domainInput)