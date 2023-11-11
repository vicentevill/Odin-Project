//expandable grid
//color picker
//darkener
//switch between hover and click
const grid = document.querySelector(".Grid");
const gridRange = document.querySelector("#Grid-range");
const label = document.querySelector("label");
const brushColor = document.querySelector("#Brush-color");

let isMouseDown = false;

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

generateGrid = () => {
  for (let i = 0; i < items * items; i++) {
    //   const item = items[i];
    // Create or manipulate HTML elements for each item
    const element = document.createElement("div");
    element.className = "Test";
    // Add the element to the DOM or perform other actions
    grid.appendChild(element);
    grid.style.gridTemplateColumns = `repeat(${items},1fr)`;
    grid.style.gridTemplateRows = `repeat(${items},1fr)`;
  }

  const gridUnits = document.querySelectorAll(".Test");
  for (let i = 0; i < gridUnits.length; i++) {
    gridUnits[i].addEventListener("mousemove", () => {
      if (isMouseDown) {
        gridUnits[i].style.background = "#fff";
      }
    });
    gridUnits[i].addEventListener("click", () => {
      gridUnits[i].style.background = "#fff";
    });
  }
};

//init
generateGrid();
