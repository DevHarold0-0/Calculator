const numbers = document.querySelectorAll('.number');
const display = document.querySelector('#digits');

const operators = document.querySelectorAll('.operator');

const solution = document.querySelector('#answer');

const clear = document.querySelector('#erase')

const point = document.querySelector('#decimal')

let operator = '';
let num1 = '';
let num2 = '';
let result;







function calculate() {
    if (operator === '+') {
        result = Number(num1) + Number(num2);
        num1 = result;
        num2 = '';
        return num1;
    }

    if (operator === '-') {
        result = Number(num1) - Number(num2);
        num1 = result;
        num2 = '';
        return num1;

    }

    if (operator === '*') {
        result = Number(num1) * Number(num2);
        num1 = result;
        num2 = '';
        return num1;

    }

    if (operator === '÷') {
        result = Number(num1) / Number(num2);
        num1 = result;
        num2 = '';
        return num1;
    }
}




function populateDisplay() {
    
    if (num1 === '' && num2 === '' && operator === '') {
        display.textContent = '0'
    }

   numbers.forEach(btn => {
       btn.addEventListener('click', (event) => {
        if (operator === '') {
            display.textContent = '';
            num1 += event.target.textContent;
            display.textContent = num1;
        }

        else if (num1 !== '' && operator !== '') {
            display.textContent = '';
            num2 += event.target.textContent;
            display.textContent = num2;
        }
       })
   });


    operators.forEach(symbol => {
        symbol.addEventListener('click', (event) => {



            if (num1 !== '' && num2 !== '') {
                display.textContent = '';
                event.target = operator;
                calculate();
                display.textContent = num1;
                operator = event.target.textContent;
            }
            
            else if (num1 !== '') {
                operator = event.target.textContent;
            }


           
        })
    })



    solution.addEventListener('click', (event) => {
        if (num1 === '0' || num2 === '0' && operator === '÷') {
            display.textContent = '(｢•-•)｢ ʷʱʸ?';
        }

        else if (num1 !== '' && num2 !== '' && operator !== '') {
            display.textContent = '';
            event.target.textContent;
            calculate();
            display.textContent = num1;
        }
    })



    clear.addEventListener('click', (event) => {
        display.textContent = '0';
        event.target.textContent;
        num1 = '';
        num2 = '';
        operator = '';
    })

}




populateDisplay()







