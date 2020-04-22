const container = document.getElementById("container");
let gridColor = '';

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
      if (gridColor == 'rgb'){
        gridItem.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      }else{
        gridItem.style.backgroundColor = "black";
      }

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

// changes box colors to rgb
const colorButton = document.getElementById("rgb");
colorButton.addEventListener("click", e => {
  gridColor = 'rgb'
});

// changes box colors to rgb
const blackButton = document.getElementById("black");
blackButton.addEventListener("click", e => {
  gridColor = ''
});
