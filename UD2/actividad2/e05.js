let num = parseInt(prompt("Ingrese el numero:"));
if (num % 2 == 0){
    if (num % 3 == 0 ){
        if (num % 5 == 0){
            alert(`el numero ${num} es par, multiplo de 3, multiplo de 5 `);
        }
        else{
            alert(`el numero ${num} es par y el multiplo de 3.`);
        }   
    }
    else{
        alert(`el numero ${num} es par`);
    }
}
else{
    if (num % 3 == 0){
        if (num % 5 == 0){
            alert(`el numero ${num} es multiplo de 3, es multiplo de 5`);    
        }
        else{
            alert(`el numero ${num} es multiplo de 3`);
        }
    }
    else{
        alert(`el numero ${num} es impar`);
    }
}