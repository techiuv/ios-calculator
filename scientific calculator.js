const input = document.getElementById('input');
const equal = document.querySelector('.equal');
const signs = document.querySelectorAll('.basic-operator');
const number = document.querySelectorAll('.number');

// Change clear btn and clear btn function
let clearBtn = document.getElementById('clearBtn');

function changeClearBtn() {
    if (input.value !== '') {
        clearBtn.innerHTML = 'C';
    }else{
        clearBtn.innerHTML = 'AC';
    }
}

input.addEventListener('input', changeClearBtn);

clearBtn.addEventListener('click', () => {
    input.value = '';
    changeClearBtn();
});


// JavaScript for history
const dots = document.getElementById('dots');
const dropdown = document.querySelector('.dropdown');

dots.addEventListener('click', () => {
    dropdown.style.display = (dropdown.style.display === 'none' || dropdown.style.display === '') ? 'inline-table' : 'none';
});

const historyBtn = document.getElementById('hist');
const History = document.querySelector('.history');

historyBtn.addEventListener('click', () => {
    History.style.display = 'inline-block';
    dropdown.style.display = 'none';
});

const clearHistory = document.getElementById('clear-history');
clearHistory.addEventListener('click', () => {
    HistoryDisplay.innerHTML = '';
    saveData();
});

const done = document.getElementById('done');
done.addEventListener('click', () => {
    History.style.display = 'none';
});

// Add history and save history
const HistoryDisplay = document.querySelector('.display-history');

equal.addEventListener('click', () => {
    if (input.value !== '') {
        let value = input.value;
        let result = eval(input.value.replace(/×/g,'*').replace(/÷/g, '/').replace(/–/g, '-'));
        let historyBox = document.createElement('div');
        historyBox.classList.add('history-area');
        let hour = new Date().getHours();
        let minutes = new Date().getMinutes();
        let seconds = new Date().getSeconds();
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        historyBox.innerHTML = `<span id="time">${hour}:${minutes} <span id="sec">${date}/${month}/${year}</span></span><div id="equation"><span id="value">${value}</span>=<span id="result">${result}</span></div>`;
        HistoryDisplay.appendChild(historyBox); // Append the historyBox to HistoryDisplay
        saveData(); // Save the updated history
    }
});

function saveData() {
    localStorage.setItem('data', HistoryDisplay.innerHTML);
}

function showHistory() {
    HistoryDisplay.innerHTML = localStorage.getItem('data');
}

showHistory();

//swipe right to delete last digit function 
function deleteLastDigit() {
    input.value = input.value.slice(0, -1);
}

let startX;
let endX;
let swipeThreshold = 40;

input.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});

input.addEventListener('touchend', (event) => {
    endX = event.changedTouches[0].clientX;

    if (endX - startX > swipeThreshold) {
        deleteLastDigit();
        changeClearBtn();
    }
});

// Max input length
let maxInputLength = 10;

function maxInput() {
    if (input.value.length > maxInputLength) {
        input.value.slice(0,-1);
    }
}

input.addEventListener('input', maxInput);

// JavaScript for main Calculation
number.forEach((value) => {
    value.addEventListener('click', () => {
        input.value += value.textContent;
    });
    changeClearBtn();
});

signs.forEach((value) => {
    value.addEventListener('click', () => {
        if(input.value !== ''){
            input.value += value.textContent;
}
    });
    changeClearBtn();
});

equal.addEventListener('click', () => {
    if (input.value !== '') {
        let result = eval(input.value.replace(/×/g, '*').replace(/÷/g, '/').replace(/–/g, '-').replace('^','**'));
        input.value = result;       
        saveData();
    }        
});

let percentage = document.getElementById('percent');
percentage.addEventListener('click',() => {
    if (input.value !== '') {
        let value = parseFloat(input.value) / 100;
        input.value = value;
        saveData();
    }
});

// toggle plus minus btn 
let PlusMinBtn = document.getElementById('plus-min');

PlusMinBtn.addEventListener('click', () => {
    if (input.value !== '0') {
        input.value = (parseFloat(input.value) * -1).toString();
    }
});

// JavaScript for scientific calculations
let sin = document.getElementById('sin');
let cos = document.getElementById('cos');
let tan = document.getElementById('tan');

sin.addEventListener('click', () => {
    if (input.value !== '') {
        let result = Math.sin(parseFloat(input.value));
        result = result.toFixed(5); // Limit result to 5 decimal places
        input.value = result;
        saveData();
    }
});

cos.addEventListener('click', () => {
    if (input.value !== '') {
        let result = Math.cos(parseFloat(input.value));
        result = result.toFixed(5);
        input.value = result;
        saveData();
    }
});

tan.addEventListener('click', () => {
    if (input.value !== '') {
        let result = Math.tan(parseFloat(input.value));
        result = result.toFixed(5);
        input.value = result;
        saveData();
    }
});

let cosec = document.getElementById('cosec');
let sec = document.getElementById('cosh');
let cot = document.getElementById('cot');

cosec.addEventListener('click', () => {
    if (input.value !== '') {
        let result = Math.sin(parseFloat(input.value));
        result = (1 / result).toFixed(5);
        input.value = result;
        saveData();
    }
});

sec.addEventListener('click', () => {
    if (input.value !== '') {
        let result = Math.cos(parseFloat(input.value));
        result = (1 / result).toFixed(5);
        input.value = result;
        saveData();
    }
});

cot.addEventListener('click', () => {
    if (input.value !== '') {
        let result = Math.tan(parseFloat(input.value));
        result = (1 / result).toFixed(5);
        input.value = result;
        saveData();
    }
});

let PI = document.getElementById('pi');

function calculatePI() {
    if (input.value === '') {
        input.value = Math.PI.toFixed(5);
    } else {
        input.value = (parseFloat(input.value) * Math.PI).toFixed(5);
    }
    saveData();
}

PI.addEventListener('click', calculatePI);

let e = document.getElementById('e');

function calculateEulerNumber() {
    if (input.value === '') {
        input.value = Math.E.toFixed(5);
    } else {
        input.value = (parseFloat(input.value) * Math.E).toFixed(5);
    }
    saveData();
}

e.addEventListener('click', calculateEulerNumber);

let exponent = document.getElementById('x^y');

exponent.addEventListener('click', () => {
    input.value += '^';
});
 
let x2 = document.getElementById('x2');

x2.addEventListener('click',()=>{
    if (input.value === '') {
        input.value = '';
    }else {
        input.value = input.value ** 2;
    }        
    saveData();
});

let root = document.getElementById('sqrt');

root.addEventListener('click',()=>{
    input.value = '√';
    
});

equal.addEventListener('click',()=>{
    if (input.value.includes('√')) {
        input.value = Math.sqrt(input.value.replace(/√/g,''));
    }
    saveData();
});

let cbrt = document.getElementById('cbrt');

cbrt.addEventListener('click', () => {
    input.value += '∛';
});

equal.addEventListener('click', () => {
    if (input.value.includes('∛')) {
        let value = input.value.replace('∛', '');
        if (value !== '') {
            input.value = Math.cbrt(parseFloat(value)).toFixed(5);
        } else {
            // Handle invalid input
            input.value = '';
        }
    }
    saveData();
});

let log1 = document.getElementById('log');

log1.addEventListener('click',()=>{
    input.value = 'lg('
});

equal.addEventListener('click',()=>{
    if (input.value.includes('lg(')) {
        input.value = Math.log10(input.value.replace('lg(', '').replace(')','')).toFixed(5);
    }
    saveData();
});

let ln = document.getElementById('ln');

ln.addEventListener('click',()=>{
    input.value = 'ln('
});

equal.addEventListener('click',()=>{     
    if(input.value.includes('ln(')){
        input.value = Math.log(input.value.replace('ln(','').replace(')','')).toFixed(5);
    }    
    saveData();
});

let bracketOpen = document.getElementById('b-open');
let bracketClose = document.getElementById('b-close');

bracketOpen.addEventListener('click', () => {
    if (input.value !== '' || input.value == '') {
        input.value += '(';    
        input.value.replace('(','');           
    }
});

bracketClose.addEventListener('click', () => {
    if (input.value !== '' || input.value == '') {
        input.value += ')';
        input.value.replace(')','');
    }
});

// query for bracket
function queryForBracket() {
    if (input.value.includes(')') || input.value.includes('(')) {
        let bracketValue = input.value;
        input.value.split();
        let result = bracketValue * input.value;
    }
}

queryForBracket();

let reciprocal = document.getElementById('reverse');

reciprocal.addEventListener('click', () => {
    if (input.value == 0) {
        input.value = '∞';
    } else {
        input.value = (1 / parseFloat(input.value)).toFixed(5);
    }
    saveData();
});

let secondBtn = document.getElementById('second-btn');
let rad = document.getElementById('RAD');

secondBtn.addEventListener('click',()=>{
    if (rad.innerHTML = 'RAD') {
        rad.innerHTML = 'deg';
    }else if(rad.innerHTML = 'deg') {
        rad.innerHTML = 'RAD';
    }
});

let MC = document.getElementById('mc');
let mMin = document.getElementById('m-');
let mPlus = document.getElementById('m+');
let memory = 0;

MC.addEventListener('click', () => {
    memory = 0;
});

mPlus.addEventListener('click', () => {
    try {
        let value = eval(input.value);
        if (isNaN(value)) {
            throw new Error('Error');
        }
        memory += value;
    } catch (error) {
        input.value = 'Error';
    }
});

mMin.addEventListener('click', () => {
    try {
        let value = eval(input.value);
        if (isNaN(value)) {
            throw new Error('Error');
        }
        memory -= value;
    } catch (error) {
        input.value = 'Error';
    }
});

let factorial = document.getElementById('factorial');

factorial.addEventListener('click', () => {
    let x = parseInt(input.value);

    if (Number.isNaN(x) || x < 0) {
        input.value = 'undefined';
    } else if (x === 0 || x === 1) {
        input.value = 1;
    } else {
        let result = 1;
        for (let i = 2; i <= x; i++) {
            result *= i;
        }
        input.value = result.toFixed(5);
    }
    saveData();
});

// Some improvement
function ignoreExtraSigns() {
    let sign = signs;
    
}
