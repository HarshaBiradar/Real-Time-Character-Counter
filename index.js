let textInput = document.getElementById("textInput");
let textArea = document.getElementById("textArea");
let bodyCont = document.getElementById("body-container");
let countButton = document.getElementById("countButton");

function countChar() {
    let text = textInput.value;
    let textBody = textArea.value;
    let charCount = 0;

    for (let i = 0; i < textBody.length; i++) {
        if (textBody[i] === text) {
            charCount++;
        }
    }

    let existingSpan = document.getElementById("charCountDisplay");
    if (existingSpan) {
        existingSpan.remove();
    }
    
    let charCountDisplay = document.createElement("span");
    charCountDisplay.id = "charCountDisplay";
    charCountDisplay.innerText = `Character Count: ${charCount}`;
    charCountDisplay.style.color = "red";
    charCountDisplay.style.display = "block";
    charCountDisplay.style.marginTop = "10px";

    bodyCont.appendChild(charCountDisplay);
}
textArea.addEventListener("input",countChar);

countButton.addEventListener("click", countChar);
