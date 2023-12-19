const numInput = document.querySelectorAll(".numInput");
const backSpace = document.querySelector(".backspace");
const result = document.querySelector(".result");
const expressionDisplay = document.querySelector(".expression");
const clear = document.querySelector(".clear");
const operatorInputs = document.querySelectorAll(".operatorInput");
const decimal = document.querySelector(".decimal");
const Test = document.querySelector(".Test");

let expression = "";

const appendNumber = (number) => {
  expression += `${number}`;
};

const appendOperator = (operator) => {
  if (expression[expression.length - 1] != " ") {
    expression += ` ${operator} `;
  }
};

const appendDecimal = () => {
  const nums = expression.split(/[-+\/*]/);
  console.log(nums);
  if (!nums[nums.length - 1].includes(".")) {
    expression += ".";
    expressionDisplay.innerHTML = expression;
  }
};

const clearExpression = () => {
  expression = "";
  expressionDisplay.innerHTML = "0";
  result.innerHTML = "0";
};

const backSpaceDelete = () => {
  if (expression === "") {
    return;
  } else if (expression.length === 1) {
    clearExpression();
  } else if (expression[expression.length - 1] === " ") {
    expression = expression.slice(0, -3);
    expressionDisplay.innerHTML = expression;
    result.innerHTML = `${eval(expression)}`;
  } else if (expression[expression.length - 2] === " ") {
    expression = expression.slice(0, -4);
    expressionDisplay.innerHTML = expression;
    result.innerHTML = `${eval(expression)}`;
  } else {
    expression = expression.slice(0, -1);
    expressionDisplay.innerHTML = expression;
    result.innerHTML = `${eval(expression)}`;
  }
};

for (let i = 0; i < numInput.length; i++) {
  numInput[i].addEventListener("click", () => {
    appendNumber(numInput[i].innerHTML);
    expressionDisplay.innerHTML = expression;
    result.innerHTML = `${eval(expression)}`;
  });
}

for (let i = 0; i < operatorInputs.length; i++) {
  operatorInputs[i].addEventListener("click", () => {
    appendOperator(operatorInputs[i].innerHTML);
    expressionDisplay.innerHTML = expression;
  });
}

clear.addEventListener("click", () => {
  clearExpression();
});

backSpace.addEventListener("click", () => {
  backSpaceDelete();
});

decimal.addEventListener("click", () => {
  appendDecimal();
});
