let nombre = prompt("Ingrese nombre y apellidos:");
let salario = parseFloat(prompt("Ingrese su salario:"));
let edad = parseInt(prompt("Ingrese su edad:"));

if (salario > 2000){
    salario = 2000;
    alert(`El usuario ${nombre} con ${edad} años de edad posee un salario de ${salario} euros.`);
}
else if (salario >=1000 && salario <= 2000){
    if (edad > 45){
        salario += salario*3/100;
        alert(`El usuario ${nombre} con ${edad} años de edad posee un salario de ${salario} euros.`);

    }
    else if (edad >= 18 && edad <= 45 ){
        salario += salario*10/100;
        alert(`El usuario ${nombre} con ${edad} años de edad posee un salario de ${salario} euros.`);
    }
}
else if (sueldo > 400 && sueldo < 1000){
    if (edad < 30){
        salario = 1100;
        alert(`El usuario ${nombre} con ${edad} años de edad posee un salario de ${salario} euros.`);

    }
    if (edad >= 30 && edad <=45){
        salario += salario*3/100;
        alert(`El usuario ${nombre} con ${edad} años de edad posee un salario de ${salario} euros.`);

    }
    else if (edad > 45 && edad <= 121){
        salario += salario*15/100;
        alert(`El usuario ${nombre} con ${edad} años de edad posee un salario de ${salario} euros.`);

    }
}