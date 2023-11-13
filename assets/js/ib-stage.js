function addCopyButton() {
    document.querySelectorAll("code").forEach((codeBlock) => {
      // only add button if browser supports Clipboard API
      if (navigator.clipboard) {
        let copyButton = document.createElement("button");
        copyButton.innerText = '';
        copyButton.className = 'copyBtn';
        copyButton.title = 'Cliquer pour copier ce texte dans votre presse-papier.';
        copyButton.type = 'button';
        codeBlock.appendChild(copyButton);
        copyButton.addEventListener("click", async () => {
          await copyCode(codeBlock);});
          
        }
    });
    }
async function copyCode(codeBlock) {
    await navigator.clipboard.writeText(codeBlock.innerText.slice(0,-6));
    console.log(codeBlock.getElementsByTagName('button')[0].className)
    }
    