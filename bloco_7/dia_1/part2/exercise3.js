let clickCount = 0;
document.getElementById('click-me').addEventListener('click', () => {
  clickCount++;
  document.getElementById('click-counter').innerText = clickCount;
})
