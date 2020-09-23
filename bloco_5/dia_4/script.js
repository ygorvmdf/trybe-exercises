// variables
let body = document.body;
let setButton = document.getElementById('set-style');

// functions
function setFontSize() {
    let fontSize = document.getElementById("font-size").value;
    body.style.fontSize = fontSize + "px";
    localStorage.fontSize = body.style.fontSize;
}
function setFontFamily() {
    let fontFamily = document.getElementById("font-family").value;
    body.style.fontFamily = fontFamily;
    localStorage.fontFamily = body.style.fontFamily;
}
function setBackgroundColor() {
    let backgroundC = document.getElementById("background-color").value;
    body.style.backgroundColor = backgroundC;
    localStorage.backgroundColor = body.style.backgroundColor;
}
function setTextColor() {
    let textColor = document.getElementById("text-color").value;
    body.style.color = textColor;
    localStorage.textColor = body.style.color;
}
function setLineHeight() {
    let lineHeight = document.getElementById("line-height").value;
    body.style.lineHeight = lineHeight;
    localStorage.lineHeight = body.style.lineHeight;
}

// eventListeners
setButton.addEventListener('click', setFontSize);
setButton.addEventListener('click', setFontFamily);
setButton.addEventListener('click', setBackgroundColor);
setButton.addEventListener('click', setTextColor);
setButton.addEventListener('click', setLineHeight);

// loading with the localStorage values
body.style.fontFamily = localStorage.fontFamily;
body.style.fontSize = localStorage.fontSize;
body.style.color = localStorage.textColor;
body.style.backgroundColor = localStorage.backgroundColor;
body.style.lineHeight = localStorage.lineHeight;