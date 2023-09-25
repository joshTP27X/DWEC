let n = prompt("ingrese el numero que desea hallar el factorial:");
let r = 1;
while (n > 1){
    r *= n;
    n--;
}
alert(`el factorial ${n} es ${r}`);