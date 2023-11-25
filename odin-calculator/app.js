const numInput = document.querySelectorAll(".numInput");
const backSpace = document.querySelector(".backspace");
const Test = document.querySelector(".Test");

for (let i = 0; i < numInput.length; i++) {
  numInput[i].addEventListener("click", () => {
    appendNumber(numInput[i].innerHTML);
  });
}

backSpace.addEventListener("click", () => {
  backSpaceDelete();
});

Test.addEventListener("click", () => {
  appendOperator(Test.innerHTML);
});

let expression = "";

const appendNumber = (number) => {
  expression += `${number}`;
  //   console.log(expression);
  //   console.log(eval(expression));
};

const appendOperator = (operator) => {
  if (expression) {
    expression += ` ${operator} `;
  }
};

const clearExpression = () => {
  expression = "";
};

appendNumber(1);
appendOperator("+");
// appendNumber(1);

// console.log(eval(expression));
const backSpaceDelete = () => {
  console.log(expression);
  console.log(expression.length);
  console.log(expression[expression.length - 1]);
  console.log(expression[expression.length - 1] === " ");
  if (expression[expression.length - 1] === " ") {
    console.log("success");
    expression = expression.slice(0, -3);
    console.log(expression);
    console.log(expression.length);
  } else {
    expression = expression.slice(0, -3);
  }
};
