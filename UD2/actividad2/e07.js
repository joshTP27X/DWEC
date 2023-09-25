let num1 = prompt("ingrese un numero.");
if (num1 != 0){
    let r = num1;
    do {
        num1 = prompt("ingrese otro numero.")
        r = r + num2;
    } while(num1 != 0);
alert(`La suma es ${r}.`);
}
else{
    alert(`La suma es 0.`);
}
