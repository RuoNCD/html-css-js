function appendValue(value) {
    if (clc) {
        resultBox.value = "";
        clc = false;
    }
    if (operation === "=") {
        dream.textContent = "";
        resultBox.value = "";
        operation = "";
        return;
    }
    if (resultBox.value === "0") {
        resultBox.value = "";
    }
    resultBox.value += value;
}
function calculateResult() {
    if (numberFirst === null) {
        dream.textContent = resultBox.value + " " + "=";
        clc = true;
    } else if (numberFirst !== null && !clc) {
        if (operation === "x") {
            dream.textContent = numberFirst + " " + "x" + " " + resultBox.value + " " + "=";
            numberFirst = eval(`${numberFirst}*${resultBox.value}`);
        } else {
            dream.textContent = numberFirst + " " + operation + " " + resultBox.value + " " + "=";
            numberFirst = eval(`${numberFirst}${operation}${resultBox.value}`);
        }

        resultBox.value = numberFirst;
        clc = true;
    } else if (numberFirst !== null && clc) {
        dream.textContent = numberFirst + " " + "=";
        clc = true;
    }
}

function clearResult() {
    resultBox.value = "0";
    numberFirst = null;
    dream.textContent = "";
}

function setOperation() {
    if (numberFirst === null) {
        numberFirst = resultBox.value;
        dream.textContent = numberFirst + " " + operation;
        clc = true;
    } else if (numberFirst !== null && !clc) {
        if (operation === "x") {
            numberFirst = eval(`${numberFirst}*${resultBox.value}`);
        } else {
            numberFirst = eval(`${numberFirst}${operation}${resultBox.value}`);
        }
        dream.textContent = numberFirst + " " + operation;
        resultBox.value = numberFirst;
        clc = true;
    } else if (numberFirst !== null && clc) {
        dream.textContent = numberFirst + " " + operation;
    }
}


let markings = ["C", "/", "x", "-", "+", "=", "+/-", "."];
let marking_means = ["clear", "operator", "operator", "operator", "operator", "equals", "reverse", "decimal"];
let numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
const buttonContainer = document.querySelector(".buttons");
const resultBox = document.getElementById("result");
const dream = document.getElementById("dream");
let marking_counter = 0;
let number_counter = 0;
let operation = "";
let numberFirst = null;
let clc = false;
for (let i = 0; i < 18; i++) {
    const newButton = document.createElement("button");
    if ([0, 1, 2, 3, 7, 11, 15, 17].includes(i)) {
        newButton.classList.add(marking_means[marking_counter]);
        newButton.textContent = markings[marking_counter];
        buttonContainer.appendChild(newButton);
        marking_counter++;
    } else {
        newButton.classList.add("number");
        newButton.textContent = numbers[number_counter];
        buttonContainer.appendChild(newButton);
        number_counter++;
    }
}
const buttons = document.querySelectorAll(".clear, .operator, .equals, .reverse, .decimal, .number");
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const buttonValue = btn.textContent;
        if (buttonValue === "C") {
            clearResult();
        } else if (buttonValue === "+/-") {
            changeSign();
        } else if (buttonValue === "=") {
            calculateResult();
        } else if (buttonValue === "+") {
            operation = "+";
            setOperation();
        } else if (buttonValue === "-") {
            operation = "-";
            setOperation();
        } else if (buttonValue === "x") {
            operation = "x";
            setOperation();
        } else if (buttonValue === "/") {
            operation = "/";
            setOperation();
        } else {
            appendValue(buttonValue);
        }
    })
})