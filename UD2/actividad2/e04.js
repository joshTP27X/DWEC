let mes = parseInt(prompt("ingrese el mes en formato de digito:"));
if (mes <=12 && mes >= 1){
    switch (mes){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            alert(`31 dias`);
            break;
        case 2:
            alert('28 dias');
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            alert(`30 dias`);
            break;
    }
}
else{
    alert(`No existe.`);
}

