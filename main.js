//variables globales
let colors = ['rgb(255, 87, 51)', 'rgb(255, 177, 51)', 'rgb(122, 230, 41) ', 'rgb(30, 196, 113)', 'rgb(45, 101, 190)', 'rgb(171, 45, 190)'];
let squares = document.querySelectorAll('.square');
let container = document.querySelector('.container');

//Cambio de color en etiquetas
for (let i = 0; i <= 5; i++) {
    squares[i].style.backgroundColor = colors[i]
}

function addElement(){
    //crear un h1
    // añadir el contenido
    let newH1 = document.createElement("h1");
    let newContent = document.createTextNode("The Great Guessing Game");
    let prueba = newH1.appendChild(newContent);
    container.appendChild(prueba)
} 
addElement()
