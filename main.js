//variables globales
let colors = ['rgb(255, 87, 51)', 'rgb(255, 177, 51)', 'rgb(122, 230, 41) ', 'rgb(30, 196, 113)', 'rgb(45, 101, 190)', 'rgb(171, 45, 190)'];
const squares = document.querySelectorAll('.squares');
let container = document.querySelector('.container');
const pickedColor = pickColor();
let span = document.querySelector('.colorDisplay')
span.innerHTML=pickedColor;
//Cambio de color en etiquetas

for(let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }




for (let i = 0; i <= 5; i++) {
    
    squares[i].style.backgroundColor = colors[i]
    squares[i].addEventListener("click", function() {
    //toma el  color de squares
    let clickedColor = this.style.background;
    //compara el color con pickedColor
    if (clickedColor === pickedColor) {
      changeColors(clickedColor);
    }else{
      this.style.background = "#232323";
    }
  })
}

//funciones

// cambiar color
function changeColors(color){
    //repetir en todos los squares
  for (let i = 0; i < squares.length; i++) {
      //cambiar el color de los squares
      squares[i].style.background = color;
  }
 //color random 
  }
  function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
    }
// funcion de crear codigo rgb random aqui



