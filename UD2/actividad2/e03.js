let hermanos = prompt("Ingrese cuantos hermanos tiene:");
let cant = prompt("ingrese la cantidad a depositar:");
if (hermanos >= 0){
    if (hermanos == 0){
            cant;
    }
    if (hermanos >= 3){
        cant = cant - cant*15/100;
        }
    else if (hermanos < 3 && hermanos > 0){
            cant = cant - cant*5/100;
        }          
    }
alert(`${cant}`);
