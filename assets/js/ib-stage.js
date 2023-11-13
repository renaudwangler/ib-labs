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
          this.className = 'copyBtnDone';
          await copyCode(codeBlock.innerText.slice(0,-6));});}
    });
    }
async function copyCode(code2copy) {
    await navigator.clipboard.writeText(code2copy);
    }
    