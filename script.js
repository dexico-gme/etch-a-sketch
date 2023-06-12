const container = document.querySelector(".container");

function calculateDiv(num) {
  canvasSize = 480 * 480;
  square = Math.sqrt(canvasSize / (num * num));
  return square;
}

function grids(num) {
  let numGrids = num * num;
  console.log(numGrids);
  for (x = 1; x < numGrids + 1; x++) {
    const newDiv = document.createElement("div");
    newDiv.className = "etchDiv";
    container.appendChild(newDiv);
  }
}

let userInput = 16;
grids(userInput);

let allDivs = document.querySelectorAll(".etchDiv");

function rainbow() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  let newcolor = "#" + randomColor;
}

allDivs.forEach((box) => {
  calculateDiv(userInput);
  console.log(`square value = ${square}`);
  box.style.width = `${square}px`;
  box.style.height = `${square}px`;
  box.onmouseover = () => {
    box.style.backgroundColor = "grey";
  };
});
// const newDiv = document.createElement("div");
// container.appendChild(newDiv);
function clear() {
  allDivs.forEach((box) => {
    box.style.backgroundColor = "lightgrey";
    console.log("cleared");
  });
}

document.getElementById("clear").addEventListener("click", clear);
