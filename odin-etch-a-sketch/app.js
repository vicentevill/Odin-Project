const Run = document.querySelector(".Run");
Run.addEventListener("click", () => {
  resetCellColors();
});
//expandable grid
//color picker
//darkener
//switch between hover and click
const grid = document.querySelector(".Grid");
const gridRange = document.querySelector("#Grid-range");
const label = document.querySelector("label");
const brushColor = document.querySelector("#Brush-color");
const reset = document.querySelector(".Reset");

let isMouseDown = false;

let filterValues = [];

document.addEventListener("mousedown", () => {
  isMouseDown = true;
  console.log(isMouseDown);
});

document.addEventListener("mouseup", () => {
  isMouseDown = false;
  console.log(isMouseDown);
});

let items = gridRange.value;
label.innerHTML = items;

gridRange.addEventListener("input", () => {
  items = gridRange.value;
  label.innerHTML = items;
  console.log(items);
  generateGrid();
});

reset.addEventListener("click", () => {
  resetCellColors();
});

generateGrid = () => {
  filterValues = [];
  for (let i = 0; i < items * items; i++) {
    //   const item = items[i];
    // Create or manipulate HTML elements for each item
    const element = document.createElement("div");
    element.className = "Test";
    // Add the element to the DOM or perform other actions
    grid.appendChild(element);
    grid.style.gridTemplateColumns = `repeat(${items},1fr)`;
    grid.style.gridTemplateRows = `repeat(${items},1fr)`;
    filterValues.push(1);
  }

  const gridUnits = document.querySelectorAll(".Test");
  for (let i = 0; i < gridUnits.length; i++) {
    gridUnits[i].addEventListener("mousemove", () => {
      if (isMouseDown) {
        gridUnits[i].style.background = `${brushColor.value}`;
      }
    });
    gridUnits[i].addEventListener("mousedown", (event) => {
      if (event.button === 0) {
        gridUnits[i].style.background = `${brushColor.value}`;
      } else if (event.button === 2 && filterValues[i] > 0) {
        filterValues[i] -= 0.1;
        filterValues[i] = Math.round(filterValues[i] * 10) / 10;

        console.log(filterValues[i]);

        gridUnits[i].style.filter = `brightness(${filterValues[i]})`;
      }
    });
  }

  resetCellColors();
};

resetCellColors = () => {
  const gridUnits = document.querySelectorAll(".Test");
  for (let i = 0; i < gridUnits.length; i++) {
    gridUnits[i].style.background = "unset";
  }
};

//init
generateGrid();
