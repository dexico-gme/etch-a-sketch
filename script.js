const container = document.querySelector(".container");

// function calculateDiv(num) {
//   let canvasSize = 480 * 480;
//   let square = Math.sqrt(canvasSize / (num * num));
//   return square;
// }

function run(num = 10) {
  var num = document.getElementById("myText").value;
  console.log(num);
  grids(num);
}

grids(16);

function grids(num = 10) {
  let etchDiv = document.querySelectorAll(".etchDiv");
  if (etchDiv != null) {
    etchDiv.forEach((box) => {
      box.remove();
      console.log("cleared");
    });

    let numGrids = num * num;
    let canvasSize = 480 * 480;
    let square = Math.sqrt(canvasSize / (num * num));
    console.log("numgrids" + numGrids);
    for (x = 1; x < numGrids + 1; x++) {
      const newDiv = document.createElement("div");
      newDiv.className = "etchDiv";
      container.appendChild(newDiv);
      console.log("square" + square);
    }
    let allDivs = document.querySelectorAll(".etchDiv");
    allDivs.forEach((box) => {
      console.log(`square value = ${square}`);
      box.style.width = `${square}px`;
      box.style.height = `${square}px`;
      box.onmouseover = () => {
        box.style.backgroundColor = "grey";
      };
    });
    console.log("done");
  }
}

// console.log("userInput" + userInput);
//minimum 16;

// console.log("user input" + x);
document.getElementById("rainbow").addEventListener("click", rainbow);

function rainbow() {
  let colorDiv = document.querySelectorAll(".etchDiv");
  colorDiv.forEach((color) => {
    color.onmouseover = () => {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      let rainbowColor = "#" + randomColor;
      color.style.backgroundColor = rainbowColor;
    };
  });
}

document.getElementById("colorpick").addEventListener("input", colorPick);

function colorPick() {
  let newColor = document.getElementById("colorpick");
  let colorDiv = document.querySelectorAll(".etchDiv");
  console.log(newColor.value);
  colorDiv.forEach((color) => {
    color.onmouseover = () => {
      color.style.backgroundColor = newColor.value;
    };
  });
}

const newDiv = document.createElement("div");
container.appendChild(newDiv);

document.getElementById("clear").addEventListener("click", clear);

function clear() {
  console.log("clear");
  let allDivs = document.querySelectorAll(".etchDiv");
  allDivs.forEach((box) => {
    box.style.backgroundColor = "lightgrey";
    console.log("cleared");
  });
}
