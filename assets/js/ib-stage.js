function addCopyButton() {
    document.querySelectorAll("code").forEach((codeBlock) => {
      // only add custom button for simple code fields and browser supports Clipboard API
      if (codeBlock.parentElement.tagName.toLowerCase() != 'pre' && navigator.clipboard) {
        let copyButton = document.createElement("button");
        copyButton.innerText = '';
        copyButton.className = 'copyBtn';
        copyButton.title = 'Cliquez pour copier ce texte dans votre presse-papier.';
        copyButton.type = 'button';
        codeBlock.appendChild(copyButton);
        copyButton.addEventListener("click", async () => {
          await copyCode(codeBlock);});
          
        }
    });
    }

async function copyCode(codeBlock) {
    await navigator.clipboard.writeText(codeBlock.innerText + "\r\n");
    codeBlock.getElementsByTagName('button')[0].className='copyBtnDone';
    codeBlock.getElementsByTagName('button')[0].title = 'Texte copié (recliquez pour copier de nouveau)'
    }

function checkBoxes(lineToCheck) {
  numLine = 0
  stageName = window.location.pathname.split('/').pop()
  lineToCheck=lineToCheck.split('-')[1]
  document.querySelectorAll('ol').forEach((olBlock) => {
    Array.prototype.slice.call(olBlock.getElementsByTagName('li')).forEach((ligne) => {
      if (numLine <= lineToCheck) { 
        ligne.className = 'li_checked'
        localStorage.setItem(stageName+'-li-'+numLine,'checked') } else { 
        ligne.className = 'li_unchecked'
        localStorage.removeItem(stageName+'-li-'+numLine)}
      numLine++})})}

      function addLiCheckbox() {
        numLine = 0
        stageName = window.location.pathname.split('/').pop()
        document.querySelectorAll('ol').forEach((olBlock) => {
          Array.prototype.slice.call(olBlock.getElementsByTagName('li')).forEach((ligne) => {
          ligne.id = 'li-'+numLine
          lineContent = document.createElement('span')
          lineContent.innerHTML = ligne.innerHTML
          while (ligne.hasChildNodes()) { ligne.removeChild(ligne.firstChild); }
          ligne.appendChild(lineContent)
          if (localStorage.getItem(stageName+'-li-'+numLine) == 'checked') { ligne.className = 'li_checked' } else { ligne.className = 'li_unchecked' }
          ligne.addEventListener('click',function(e) { 
            if (e.target.nodeName==='LI') {
            checkBoxes(this.id) }
          })
            numLine++})})
          }

