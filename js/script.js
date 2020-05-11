//1-Definición de variables:
let numberOfSquare = 6;
let colors = generateRandomColors(numberOfSquare);
const square = document.querySelectorAll(".square");
let pickedColor = pickColor();
const pickedColorSpan = document.getElementById("colorDisplay");
pickedColorSpan.textContent = pickedColor;
const message = document.querySelector("#message");
const topNavTitle = document.querySelector("#topNav");
const resetBtn = document.querySelector("#reset");
const colorDisplay = document.querySelector("#colorDisplay");
const easy = document.querySelector("#easyBtn");
const hard = document.querySelector("#hardBtn");
const colorOriginal = topNavTitle.style.backgroundColor;
const buttons = document.querySelectorAll(".selected");

//***********************************************************************************************************************************//
//2-Funciones auxiliares:

function changeColors(oneColor) {
  for (let i = 0; i < square.length; i++)
    square[i].style.backgroundColor = oneColor;
}

function pickColor() {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random]
}


function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})` 
    
}

function generateRandomColors(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(getRandomColor())
  }
  return arr
}
//***********************************************************************************************************************************//
// //3- Funcionalidad corta refactoreada
init()

function init() {
  setUpBotones()
  setUpSquares()
  reset()
}

function reset() {
  colors = generateRandomColors(numberOfSquare)
  pickedColor = pickColor()
  colorDisplay.textContent = pickedColor
  for (let i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.background = colors[i]
      square[i].style.display = "block"
    } else {
      square[i].style.display = "none"
    }
  }
  topNavTitle.style.backgroundColor = colorOriginal;
  message.textContent = "";
  resetBtn.textContent = "New Colors";
}


function setUpBotones() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click",  () => {
      buttons[0].classList.remove("selected")
      buttons[1].classList.remove("selected")
      this.classList.add("selected")
      numberOfSquare = (this.textContent === "Easy") ? 3 : 6
      reset()
    })
  }
}

function setUpSquares() {
  for (let i = 0; i < square.length; i++) {
    square[i].addEventListener("click",() => {
      let clickedColor = this.style.background
      if (clickedColor === pickedColor) {
        message.textContent = "¡You rock!";
        resetBtn.textContent = "Play again!";
        changeColors(clickedColor)
        topNavTitle.style.background = clickedColor
      } else {
        this.style.background = "#232323";
        message.textContent = "Try again!";
      }
    })
  }
}

resetBtn.addEventListener("click",  () => {
  reset()
})


