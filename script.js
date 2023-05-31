const container = document.querySelector(".container");

function grids(num) {
  let numGrids = num * num;
  console.log(numGrids);
  for (x = 1; x < numGrids + 1; x++) {
    const newDiv = document.createElement("div");
    newDiv.className = "etchDiv";
    container.appendChild(newDiv);
  }
}

grids(100);

let allDivs = document.querySelectorAll(".etchDiv");

allDivs.forEach((box) => {
  box.onmouseover = () => {
    box.style.backgroundColor = "red";
  };
});
// const newDiv = document.createElement("div");
// container.appendChild(newDiv);
