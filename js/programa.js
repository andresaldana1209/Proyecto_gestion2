function cambiarColor(){
    var x = document.getElementById("titulo");
    x.style.color = 'red';
    x.style.backgroundColor = 'yellow';
}

function RestablecerColor(){
    var x = document.getElementById("titulo");
    x.style.color = 'black';
    x.style.backgroundColor = 'aqua';
}

function obtenerPareseImpares(){
    var numeros = document.getElementById("Numero4D");
    
    if (numeros % 2 == 0){
        alert("numero par")
    }
}