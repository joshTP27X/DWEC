let n1 = parseInt(prompt("Ingrese numero 1:"));
let n2 = parseInt(prompt("Ingrese numero 2:"));
let m = prompt("ingrese el signo que desee que se realice en la operacion:");
let r;
if (m === "+"){
    r = n1 + n2;
    alert(`la suma es ${r}.`);
}
if (m === "-"){
    r = n1 - n2
    alert(`la resta es ${r}.`);
}
if (m === "*"){
    r = n1 * n2;
    alert(`la multiplicacion es ${r}.`);
}
if (m === "/"){
    r = n1 / n2;
    alert(`la division es ${r}.`);
}