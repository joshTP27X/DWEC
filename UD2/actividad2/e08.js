let text = "los numeros pares entre 25 y 1 son: ";
for(let i = 25; i > 0; i--){
    if(i % 2 == 0){
        text += i + " ";
    }  
}
alert(`${text}`);