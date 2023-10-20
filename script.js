// Function to copy the code
function copyCode() {
  const codeEditor = document.querySelector(".code-editor__code");
  const range = document.createRange();
  range.selectNode(codeEditor);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Code copied to clipboard");
}

// Function to save the code to local storage
function saveCode() {
  const codeEditor = document.querySelector(".code-editor__code");
  localStorage.setItem("savedCode", codeEditor.textContent);
  alert("Code saved to local storage");
}

// Function to toggle the Lock/Unlock button
function toggleLock() {
  const lockButton = document.querySelector(".code-editor__button--lock");
  const codeEditor = document.querySelector(".code-editor__code");

  codeEditor.isContentEditable
    ? ((codeEditor.contentEditable = "false"),
      (lockButton.textContent = "Unlock"))
    : ((codeEditor.contentEditable = "true"),
      (lockButton.textContent = "Lock"));
}

// Get the contenteditable element
const editableDiv = document.getElementById("editableDiv");

editableDiv.addEventListener("keydown", function (e) {
  if (e.key === "Tab") {
    e.preventDefault();
    document.execCommand("insertText", false, "   ");
  } else {
    editableDiv.style.color = "black";
  }
});
