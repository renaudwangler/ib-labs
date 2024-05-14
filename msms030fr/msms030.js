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
domainInput.style.position = 'sticky'
domainInput.style.top = '25%'
domainInput.style.left = '25%'
domainInput.innerHTML = '<div style="width:100%;height:20px;background:blue;"></div>'

document.body.appendChild(domainInput)