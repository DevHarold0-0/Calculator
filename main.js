function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}



//Update display later.
let num1;
let operator;
let num2;





function operate(operator, num1, num2) {
    if (operator === "+") {
        a = num1;
        b = num2;
        return add(a,b);
    }

    if (operator === "-") {
        a = num1;
        b = num2;
        return subtract(a,b);
    }

    if (operator === "*") {
        a = num1;
        b = num2;
        return multiply(a,b);
    }

    if (operator === "/") {
        a = num1;
        b = num2;
        return divide(a,b);
    }
}