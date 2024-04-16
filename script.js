let color = "black";
let click = true;

function sketchboard(s) {
  let grid = document.querySelector(".grid");
  let divs = grid.querySelectorAll("div");
  divs.forEach((div) => div.remove());
  grid.style.gridTemplateColumns = `repeat(${s} , 1fr)`;
  grid.style.gridTemplateRows = `repeat(${s} , 1fr)`;

  for (let i = 0; i < s*s; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", colorSquare);
    div.style.backgroundColor = "white";
    grid.insertAdjacentElement("beforeend", div);
  }
}

sketchboard(16);

function EnterGridSize(input) {
  if (input >1 && input < 101) {
    document.querySelector(".error").style.display = "none";
    sketchboard(input);
  } else {
    document.querySelector(".error").style.display = "flex";
  }
}

function colorSquare() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function reset() {
  let grid = document.querySelector(".grid");
  let divs = grid.querySelectorAll("div");
  divs.forEach((div) => (div.style.backgroundColor = "white"));
}

