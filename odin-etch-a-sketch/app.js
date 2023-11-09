const items = 16;

for (let i = 0; i < items; i++) {
  const item = items[i];
  // Create or manipulate HTML elements for each item
  const element = document.createElement("div");
  element.className = "Test";
  // Add the element to the DOM or perform other actions
  document.body.appendChild(element);
}
