let ciudad = prompt("ingrese el nombre de la ciudad donde vive:");
let edad = prompt("ingrese su edad:");
let respuesta = (ciudad === "alicante" && edad >= 18) ? "El usuario puede acceder al carnet de empresarios emprededores" : "No puede acceder al carnet.";
alert(`${respuesta}`);