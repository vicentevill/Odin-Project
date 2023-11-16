const Run = document.querySelector(".Run");
Run.addEventListener("click", () => {
  resetCellColors();
});

const grid = document.querySelector(".Grid");
const gridRange = document.querySelector("#Grid-range");
const label = document.querySelector("label");
const brushColor = document.querySelector("#Brush-color");
const reset = document.querySelector(".Reset");
const eraser = document.querySelector(".Eraser");
const darkener = document.querySelector(".Darkener");

let isMouseDown = false;

let isEraser = false;

let isDarkener = false;

let filterValues = [];

document.addEventListener("mousedown", () => {
  isMouseDown = true;
  console.log(isMouseDown);
});

document.addEventListener("mouseup", () => {
  isMouseDown = false;
  console.log(isMouseDown);
});

eraser.addEventListener("click", () => {
  isEraser = !isEraser;
  isDarkener = false;
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

darkener.addEventListener("click", () => {
  isDarkener = !isDarkener;
  isEraser = false;
});

const generateGrid = () => {
  //Reset filterValues
  filterValues = [];

  for (let i = 0; i < items * items; i++) {
    //Generate grid elements and give them a class of 'Cell', then add them to Grid element
    const element = document.createElement("div");
    element.className = "Cell";
    grid.appendChild(element);
    //Template Grid
    grid.style.gridTemplateColumns = `repeat(${items},1fr)`;
    grid.style.gridTemplateRows = `repeat(${items},1fr)`;
    //Create new filer values for each cell
    filterValues.push(1);
  }

  //Select cell elements
  const gridCells = document.querySelectorAll(".Cell");

  //Add events for when the mouse moves over a cell
  for (let i = 0; i < gridCells.length; i++) {
    gridCells[i].addEventListener("mousemove", () => {
      if (isMouseDown) {
        gridCells[i].style.background = `${brushColor.value}`;
      }
      if (isMouseDown && isEraser) {
        gridCells[i].style.background = "";
      }
    });

    //Add events for when cell is clicked
    gridCells[i].addEventListener("click", () => {
      if (isDarkener) {
        filterValues[i] -= 0.1;
        filterValues[i] = Math.round(filterValues[i] * 10) / 10;
        gridCells[i].style.filter = `brightness(${filterValues[i]})`;
      } else if (isEraser) {
        gridCells[i].style.background = "";
      } else gridCells[i].style.background = `${brushColor.value}`;
    });
  }

  //Reset cell background colors
  resetCellColors();
};

const resetCellColors = () => {
  const gridCells = document.querySelectorAll(".Cell");
  for (let i = 0; i < gridCells.length; i++) {
    gridCells[i].style.background = "";
  }
};

//init
generateGrid();
