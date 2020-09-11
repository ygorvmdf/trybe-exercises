let body = document.body;
let fontFamily = document.getElementById('font-family').value;
let backColor = document.getElementById('background-color').value;
let textColor = document.getElementById('text-color').value;
let lineHeight = document.getElementById('line-height').value;
let setButton = document.getElementById('set-style');
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

setButton.addEventListener('click', setFontSize);
setButton.addEventListener('click', setFontFamily);
setButton.addEventListener('click', setBackgroundColor);
setButton.addEventListener('click', setTextColor);