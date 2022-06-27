//variables globales
let colors =rellenarArray() ;
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
//clicker cuando el color es = al colorcliker  
for (let i = 0; i <= 5; i++) {
    squares[i].style.backgroundColor = colors[i]
    //evento click
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
    let random = Math.floor(Math.random() * colors.length)
    return colors[random];
}
// funcion de crear codigo rgb random aqui

function randomColor (){
  
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
   return  'rgb'+'('+r+','+g+','+b+')'
}

function rellenarArray(){
    let colors=[];
    for(let i=0; i<=5;i++){
      colors.push(randomColor())
  }
return colors
}
