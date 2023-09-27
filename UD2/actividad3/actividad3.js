//let fondo = document.getElementById("fondo").style.backgroundColor = ;
//let color = parseInt(Math.random(256));
//fondo.style.backgroundColor = color;
///function cambio(){
 //   let cc = document.getElementById("fondo");
   // cc.style.backgroundColor = `#${parseInt(Math.random(256))}`;
//}
function rgbcolor(){
    var verde = Math.floor(Math.random() * 256);
    var azul = Math.floor(Math.random() * 256);
    var rojo = Math.floor(Math.random() * 256);
    return `rgb(${verde},${azul},${rojo})`;
}

function cambiodecolor(){
    document.body.style.backgroundColor = rgbcolor();
}

cambiodecolor();
