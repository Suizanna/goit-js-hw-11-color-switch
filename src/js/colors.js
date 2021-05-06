const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('button[data-action = " start "]'),
    stopBtn: document.querySelector('button[data-action = " stop "]')
  }

  refs.startBtn.addEventListener('click', startChangeColor);
  refs.stoptBtn.addEventListener('click', stopChangeColor);
  let timerId = null;

function startChangeColor() {
  const timerId  = setInterval(() => {
console.log("Click the button");
  }, 1000);
}


function stopChangeColor() {  
  clearInterval(timerId); 
  console.log("setInterval stopped!");
}

  const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};