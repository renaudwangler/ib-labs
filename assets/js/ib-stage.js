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

  document.querySelectorAll('ol').forEach((olBlock) => {
    olBlock.querySelectorAll('li').forEach((liBlock) => {
      console.log(liBlock)
      console.log(olBlock.prototype.indexOf(liBlock))

    })})

  lignesIn = document.getElementsByTagName('li')
  lignes = Array.prototype.slice.call(lignesIn);
  lignes.forEach((ligne) => {
    ligneOut= ligne
    console.log(ligne.style.listStyleType)
  })

}