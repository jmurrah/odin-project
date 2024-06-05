let STACK = [0];

function changeDisplay(number) {
    if (number.toString().length > 10) {
        number = number.toExponential(5);
    } else {
        number = parseFloat(number);
    }
    document.querySelector("#display").textContent = number;
}


function operate(n1, n2, operation) {
    const operations = {
        "add": (n1, n2) => n1 + n2,
        "subtract": (n1, n2) => n1 - n2,
        "multiply": (n1, n2) => n1 * n2,
        "divide": (n1, n2) => n1 / n2,
    };

    STACK.splice(0, STACK.length, operations[operation](n1, n2));
    changeDisplay(STACK[0]);
}


function handleOperation(operation) {
    if (STACK.length === 3) {
        operate(STACK[0], STACK[2], STACK[1]);
        STACK.push(operation);
    } else if (STACK.length === 2) {
        if (STACK[1] === operation) {
            operate(STACK[0], STACK[0], STACK[1]);
        } else {
            STACK.splice(0, STACK.length);
            changeDisplay("ERROR");
        }
    } else {
        STACK.push(operation);
    }
}

function handleNumber(number) {
    const wordToNumber = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
    };

    if (STACK.length === 1) {
        STACK[0] = STACK[0] * 10 + wordToNumber[number];
    } else if (STACK.length === 2) {
        STACK.push(wordToNumber[number]);
    } else if (STACK.length === 3) {
        STACK[2] = STACK[2] * 10 + wordToNumber[number];
    }

    changeDisplay(STACK[STACK.length - 1]);
}

window.onload = () => {
    const buttons = document.querySelector("#buttons");
    buttons.addEventListener("click", (e) => {
        const id = e.target.id;

        if (["add", "subtract", "multiply", "divide"].includes(id)) {
            handleOperation(id);
        } else if (id === "equals") {
            if (STACK.length === 3) {
                operate(STACK[0], STACK[2], STACK[1]);
            }
        } else if (id === "clear") {
            STACK.splice(0, STACK.length, 0); ;
            changeDisplay(0);
        } else {
            handleNumber(id);
        }

        console.log(STACK);
    });

}