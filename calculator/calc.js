// Clock Section
const displayField = document.querySelector('.display-field');
const hrs = document.getElementById('hrs');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');

    setInterval(() => {
        let date = new Date(),
        currSec = date.getSeconds(),
        currMin = date.getMinutes(),
        currHrs = date.getHours();
        
        hrs.innerHTML = currHrs < 10 ? "0" + currHrs : currHrs; 
        mins.innerHTML = currMin < 10 ? "0" + currMin : currMin;
        secs.innerHTML = currSec < 10 ? "0" + currSec : currSec;  
       }, 1000);

// Calculator Section
const display = document.getElementById('display');
const delKey = document.getElementById('del');
const clearKey = document.getElementById('clear');
const equalKey = document.getElementById('equal');
const valKeys = document.querySelectorAll('.val');
let userClick;

   valKeys.forEach(valKey => 
      valKey.addEventListener('click', (e) => {
        userClick = e.target.value;
        display.value += userClick;
    }));

    clearKey.addEventListener('click', () => {
        display.value = " ";
    });

    delKey.addEventListener('click', () => {
        display.value = display.value.toString().slice(0,-1);
    });

    equalKey.addEventListener('click', () => {
        display.value = eval(display.value);
    });