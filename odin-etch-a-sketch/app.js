//expandable grid
//color picker
//darkener
//switch between hover and click
const grid = document.querySelector(".Grid");

const items = 16;

for (let i = 0; i < items * items; i++) {
  //   const item = items[i];
  // Create or manipulate HTML elements for each item
  const element = document.createElement("div");
  element.className = "Test";
  // Add the element to the DOM or perform other actions
  grid.appendChild(element);
  grid.style.gridTemplateColumns = `repeat(${items},1rem)`;
  grid.style.gridTemplateRows = `repeat(${items},1rem)`;
}
