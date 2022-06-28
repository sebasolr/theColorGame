//variables globales
let cantidadColores = 6;
let colors = generateRandomColors(cantidadColores);
const squares = document.querySelectorAll('.squares');
let container = document.querySelector('.container');
let pickedColor = pickColor();
let span = document.querySelector('.colorDisplay');
span.innerHTML = pickedColor;
let mensaje = document.querySelector('.mensaje');
let boton = document.querySelector('#reset');
let levelhard = document.querySelector('#hard');
let leveleasy = document.querySelector('#easy');
//boton reset
boton.addEventListener('click', function () {
  window.location.reload()
})
//boton easy
leveleasy.addEventListener('click', function () {
  leveleasy.classList.add('selected');
  levelhard.classList.remove('selected');  
  cantidadColores = 3;
  colors = generateRandomColors(cantidadColores);
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
  cantidadColores = 6;  
  colors = generateRandomColors(cantidadColores);
  pickedColor = pickColor();
  span.innerHTML = pickedColor;
  for (let i = 0; i <squares.length ; i++) {
    
      squares[i].style.background = colors[i];
    
      squares[i].style.display = "block";
    
  }
})

//clicker cuando el color es = al colorcliker  
for (let i = 0; i <= 5; i++) {
  squares[i].style.backgroundColor = colors[i]
  //evento click
  squares[i].addEventListener("click", function () {
    //toma el  color de squares
    const clickedColor = this.style.background;
    //compara el color con pickedColor
    if (clickedColor == pickedColor) {
      changeColors(clickedColor);
      mensaje.innerHTML = "¡Correcto!"
    } else {
      this.style.background = "#232323";
      mensaje.innerHTML = "intentalo nuevamente!"
      reset.innerHTML = 'Play Again?'
    } console.log(clickedColor)
  })
}
//funciones

// cambiar color
function changeColors(color) {
  //repetir en todos los squares
  for (let i = 0; i < cantidadColores; i++) {
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
  for (let i = 0; i < cantidadColores; i++) {
    colors.push(randomColor())
  }
  return colors
}
