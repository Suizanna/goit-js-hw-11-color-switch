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
    // refs.startBtn.disabled = true;
    // refs.stopBtn.disabled = false;
      //или
    refs.startBtn.setAttribute('disabled', 'disabled');
    refs.stopBtn.removeAttribute('disabled');
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length-1)];
   console.log("Click the button");

  }, 1000);
 
};

function stopChangeColor() {  
  // refs.startBtn.disabled = false;
  // refs.stopBtn.disabled = true;
    //или
  refs.startBtn.removeAttribute('disabled');
  refs.stopBtn.setAttribute('disabled', 'disabled');
  clearInterval(timerId); 
  console.log("setInterval stopped!");
}

  const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};