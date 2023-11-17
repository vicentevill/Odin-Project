// const Run = document.querySelector(".Run");
// Run.addEventListener("click", () => {
//   resetCellColors();
// });

const grid = document.querySelector(".Grid");
const gridRange = document.querySelector("#Grid-range");
const gridLabel = document.querySelector(".Grid-range-label");
const brushColor = document.querySelector("#Brush-color");
const reset = document.querySelector(".Reset");
const eraser = document.querySelector(".Eraser");
const darkener = document.querySelector(".Darkener");
const colorWrapper = document.querySelector(".Brush-color-wrapper");

let isMouseDown = false;

let isEraser = false;

let isDarkener = false;

let filterValues = [];

let items = gridRange.value;

colorWrapper.style.background = brushColor.value;

gridLabel.innerHTML = `Grid Size ${items} x ${items} (${items * items} cells)`;

document.addEventListener("mousedown", () => {
  isMouseDown = true;
});

document.addEventListener("mouseup", () => {
  isMouseDown = false;
});

eraser.addEventListener("click", () => {
  isEraser = !isEraser;
  isDarkener = false;
  if (isEraser) {
    eraser.style.background = "#0075ff";
    darkener.style.background = "";
  } else {
    eraser.style.background = "";
  }
});

gridRange.addEventListener("input", () => {
  items = gridRange.value;
  gridLabel.innerHTML = `Grid Size ${items} x ${items} (${
    items * items
  } cells)`;

  generateGrid();
});

brushColor.addEventListener("input", () => {
  colorWrapper.style.background = brushColor.value;
});

reset.addEventListener("click", () => {
  resetCellColors();
});

darkener.addEventListener("click", () => {
  isDarkener = !isDarkener;
  isEraser = false;
  console.log(isDarkener);
  if (isDarkener) {
    darkener.style.background = "#0075ff";
    eraser.style.background = "";
  } else {
    darkener.style.background = "";
  }
});

const resetCellColors = () => {
  const gridCells = document.querySelectorAll(".Cell");
  for (let i = 0; i < gridCells.length; i++) {
    gridCells[i].style.background = "";
  }
};

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
      if (isMouseDown && !isDarkener) {
        gridCells[i].style.background = `${brushColor.value}`;
      }
      if (isMouseDown && isEraser) {
        gridCells[i].style.background = "";
      }
    });

    //Add events for when cell is clicked
    gridCells[i].addEventListener("click", () => {
      if (isDarkener && gridCells[i].style.background) {
        filterValues[i] -= 0.1;
        filterValues[i] = Math.round(filterValues[i] * 10) / 10;
        gridCells[i].style.filter = `brightness(${filterValues[i]})`;
        console.log("Success");
      }
      if (isEraser) {
        gridCells[i].style.background = "";
      }
      if (!isDarkener && !isEraser) {
        gridCells[i].style.background = `${brushColor.value}`;
      }
    });
  }

  //Reset cell background colors
  resetCellColors();
};

//init
generateGrid();
