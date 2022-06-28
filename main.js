//variables globales
let numberOfSquares = 6;
let colors = generateRandomColors(numberOfSquares);
const squares = document.querySelectorAll('.squares');
let container = document.querySelector('.container');
let pickedColor = pickColor();
let span = document.querySelector('.colorDisplay');
span.innerHTML = pickedColor;
let mensaje = document.querySelector('#message');
let boton = document.querySelector('#reset');
let levelhard = document.querySelector('#hard');
let leveleasy = document.querySelector('#easy');
let h1= document.querySelector('h1')
//boton reset
boton.addEventListener('click', function () {
  window.location.reload()
})
//boton easy
leveleasy.addEventListener('click', function () {
  leveleasy.classList.add('selected');
  levelhard.classList.remove('selected');  
  numberOfSquares = 3;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  span.innerHTML = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
})
//btn hard
levelhard.addEventListener('click', function () {
  levelhard.classList.add('selected');
  leveleasy.classList.remove('selected');
  numberOfSquares = 6;  
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  span.innerHTML = pickedColor;
  for (let i = 0; i <squares.length ; i++) {
    
      squares[i].style.background = colors[i];
    
      squares[i].style.display = "block";
    
  }
})
//le asigna los colores y posiciones a los cuadrados
for(let i = 0; i < numberOfSquares; i++) {
  if (colors[i]) {
    squares[i].style.background = colors[i];
  } else {
    squares[i].style.display = "none";
  }
}
//clicker cuando el color es = al colorcliker  
for (let i = 0; i <= 5; i++) {
  squares[i].style.backgroundColor = colors[i]
  //evento click
  squares[i].addEventListener("click", function () {
    //toma el  color de squares
    let clickedColor = this.style.background;
    //compara el color con pickedColor
    if (clickedColor === pickedColor) {
      changeColors(clickedColor);
      h1.style.color= clickedColor;
      mensaje.innerHTML = "¡Correcto!"
      reset.innerHTML = 'Play Again?'

      console.log(clickedColor)
    } else {
      this.style.background = "#232323";
      mensaje.innerHTML = "Intentalo nuevamente!"
    } console.log(clickedColor)
  })
}
//funciones

// cambiar color
function changeColors(color) {
  //repetir en todos los squares
  for (let i = 0; i < numberOfSquares; i++) {
    //cambiar el color de los squares
    squares[i].style.background = color;
  }
  //color random 
}
function pickColor() {
  let random = Math.floor(Math.random() * colors.length)
  return colors[random];
}
// funcion de crear codigo rgb random aqui

function randomColor() {

  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  return 'rgb' + '(' + r + ', ' + g + ', ' + b + ')'
}

function generateRandomColors() {
  let colors = [];
  for (let i = 0; i < numberOfSquares; i++) {
    colors.push(randomColor())
  }
  return colors
}
