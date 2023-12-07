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

function addLiCheckbox() {

  numLine = 0
  document.querySelectorAll('ol').forEach((olBlock) => {
    Array.prototype.slice.call(olBlock.getElementsByTagName('li')).forEach((ligne) => {
    ligne.id = 'li-'+numLine
    ligne.className = 'li_unchecked'
    ligne.addEventListener('click',function() { checkBoxes(this.id) })
      numLine++
    })
  })

}

function checkBoxes(lineToCheck) {
  numLine = 0
  lineToCheck=lineToCheck.split('-')[1]
  console.log(lineToCheck)
  document.querySelectorAll('ol').forEach((olBlock) => {
    Array.prototype.slice.call(olBlock.getElementsByTagName('li')).forEach((ligne) => {
      if (numLine <= lineToCheck) { ligne.className = 'li_checked' }
    })
  })
}