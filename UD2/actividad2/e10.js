let n1 = parseInt(prompt("ingrese numero a adivinar:"));
let n2 = parseInt(prompt("ingrese el numero que crees que se ha puesto:"));

if (n1 == n2){
    alert(`Haz acertado, felicidades!`);
}
else{
    if (n1 > n2){
        alert(`el numero es mas grande.`);
        do{
            let n2 = parseInt(prompt("ingrese el numero que crees que se ha puesto:"));
            if (n1 > n2){
                alert(`el numero es mas grande.`);
            }
            else if (n1 == n2){
                alert(`Felicidades lo encontrastes`);
                break;
            }
            else{
                alert(`el numero es mas pequeño.`);
            }

        } while (n1 != n2);
    }
    else{
        alert(`El numero es mas pequeño`);
        do{
            let n2 = parseInt(prompt("ingrese el numero que crees que se ha puesto:"));
            if (n1 < n2){
                alert(`El numero es mas pequeño`);
            }
            else if (n1 == n2){
                alert(`Felicidades lo encontrastes.`);
                break;
            }
            else{
                alert(`El numero es mas grande`);
            }
        } while (n1 != n2);
    }
}