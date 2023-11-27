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
};

const backSpaceDelete = () => {
  if (expression[expression.length - 1] === " ") {
    expression = expression.slice(0, -3);
  } else {
    expression = expression.slice(0, -1);
  }
};

for (let i = 0; i < numInput.length; i++) {
  numInput[i].addEventListener("click", () => {
    appendNumber(numInput[i].innerHTML);
    expressionDisplay.innerHTML = expression;
    result.innerHTML = `Result: ${eval(expression)}`;
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
  expressionDisplay.innerHTML = expression;
});

backSpace.addEventListener("click", () => {
  backSpaceDelete();
  expressionDisplay.innerHTML = expression;
});

decimal.addEventListener("click", () => {
  appendDecimal();
});
