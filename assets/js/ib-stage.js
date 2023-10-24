function addCopyButton() {
    document.querySelectorAll("code").forEach((codeBlock) => {
      // only add button if browser supports Clipboard API
      if (navigator.clipboard) {
        let copyButton = document.createElement("button");
        copyButton.innerText = 'copier';
        copyButton.className = 'copyBtn';
        codeBlock.appendChild(copyButton);
        copyButton.addEventListener("click", async () => {
          await copyCode(codeBlock.innerText.slice(0,-6));});}
    });
    }
async function copyCode(code2copy) {
    await navigator.clipboard.writeText(code2copy);
    }
    