function appendValue(value) {
    resultBox.value += value;
}
function calculateResult() {

}

function clearResult() {
    resultBox.value = "";
}



let markings = ["C", "/", "*", "-", "+", "=", "+/-", "."];
let marking_means = ["clear", "operator", "operator", "operator", "operator", "equals", "reverse", "decimal"];
let numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
const buttonContainer = document.querySelector(".buttons");
const resultBox = document.getElementById("result");
let marking_counter = 0;
let number_counter = 0;
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
console.log(buttons)
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const buttonValue = btn.textContent;
        if (buttonValue === "C") {
            clearResult();
        } else if (buttonValue === "+/-") {
            changeSign();
        } else if (buttonValue === "=") {
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
    })
})