const numInput = document.querySelectorAll(".numInput");
const Test = document.querySelector(".Test");

for (let i = 0; i < numInput.length; i++) {
  numInput[i].addEventListener("click", () => {
    appendNumber(numInput[i].innerHTML);
  });
}

Test.addEventListener("click", () => {
  appendOperator(Test.innerHTML);
});

let expression = "";

const appendNumber = (number) => {
  expression += `${number}`;
  console.log(expression);
};

const appendOperator = (operator) => {
  if (expression) {
    expression += ` ${operator} `;
  }
  console.log(expression);
};

const clearExpression = () => {
  expression = "";
};

appendNumber(1);
appendOperator("+");
appendNumber(1);
// clearExpression();

console.log(eval(expression));
