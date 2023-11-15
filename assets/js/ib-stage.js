function addCopyButton() {
    document.querySelectorAll("code").forEach((codeBlock) => {
      // only add custom button for simple code fields and browser supports Clipboard API
      console.log(codeBlock.parentElement.id);
      if (codeBlock.parentElement.id == '' && navigator.clipboard) {
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
    await navigator.clipboard.writeText(codeBlock.innerText);
    codeBlock.getElementsByTagName('button')[0].className='copyBtnDone';
    codeBlock.getElementsByTagName('button')[0].title = 'Texte copié (recliquez pour copier de nouveau)'
    }
    