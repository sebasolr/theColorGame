//variables globales
let cantidadColores = 6;
let colors =rellenarArray(cantidadColores) ;
const squares = document.querySelectorAll('.squares');
let container = document.querySelector('.container');
const pickedColor = pickColor();
let span = document.querySelector('.colorDisplay')
span.innerHTML=pickedColor;
let mensaje = document.querySelector('.mensaje')
//boton reset


//Cambio de color en etiquetas
for(let i = 0; i < cantidadColores; i++) {
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
    const clickedColor = this.style.background;
  //compara el color con pickedColor
      if (clickedColor == pickedColor) {
        changeColors(clickedColor);
        mensaje.innerHTML= "Increible!!!"
      }else{
        this.style.background = "#232323";
        mensaje.innerHTML= "intentalo nuevamente!"
      } console.log(clickedColor)
  })
}
//funciones

// cambiar color
function changeColors(color){
    //repetir en todos los squares
  for (let i = 0; i < cantidadColores; i++) {
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
   return  'rgb'+'('+r+', '+g+', '+b+')'
}

function rellenarArray(){
    let colors=[];
    for(let i=0; i<cantidadColores;i++){
      colors.push(randomColor())
  }
return colors
}
