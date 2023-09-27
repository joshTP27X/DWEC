let num = prompt("Ingrese un numero:");

if (isNaN(num) == true){
    alert(`${num} no es un numero.`);
}
else if (isNaN(num) == false){
    alert(`${num} es un numero.`);
}
else{
    alert(`Acaso me quieres matar con ${num}`);
}