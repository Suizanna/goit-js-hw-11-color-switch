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
    startBtn: document.querySelector('button[data-action=start]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
  }
 

  let timerId = null;
 

  refs.startBtn.addEventListener('click', startChangeColor);
  refs.stopBtn.addEventListener('click', stopChangeColor);

function startChangeColor() {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length-1)];
   console.log("Click the button");
    
  }, 1000);
  refs.startBtn.disabled = true;
};

function stopChangeColor() {  
    clearInterval(timerId); 
  refs.startBtn.disabled = false;
  console.log("setInterval stopped!");
}

  const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
