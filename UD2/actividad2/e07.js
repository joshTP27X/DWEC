let num1 = parseInt(prompt("ingrese un numero:"));
if(num1 != 0){
    let r = num1;
    let num2;
    do {
        num2 = parseInt(prompt("Ingrese un numero:"));
        r += num2;
    } while (num2 != 0);
    alert(`La suma es ${r}`);
}
else{
    alert(`la suma es 0.`);
}

