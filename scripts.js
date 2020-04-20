const container = document.getElementById("container");

// makes grid based on number of rows/cols entered
function drawGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

// deletes grid before reset
function deleteGrid() {
  let cell = document.querySelectorAll(".grid-item");
  cell.forEach(cell => {
    container.removeChild(cell);
  });
}

// changes background color of divs to black
function etch() {
  let gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(gridItem => {
    gridItem.addEventListener("mouseover", e => {
      gridItem.style.backgroundColor = "black";
    });
  });
}

drawGrid(16, 16);
etch();

// asks user how big they want the grid then calls delete and make functions
function reset() {
  let grid = prompt("How many squares per side?");

  deleteGrid();
  drawGrid(grid, grid);
}

// resets the grid when button is clicked
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", e => {
  reset();
  etch();
});


