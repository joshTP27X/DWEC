'use strict'

function Ordenador(marca, modelo, ram = 16, disco = 256, pulgadas = 15.6, fecha, ...accesorios){
    if(!isNaN(marca)){
        this.marca = 'no definida';
    }
    else{
        this.marca = marca
    }

    if(!isNaN(modelo)){
        this.modelo = 'no definido';
    }
    else{
        this.modelo = modelo;
    }

    if (!isNaN(ram) || ram > 0){
        this.ram = ram
    }
    else{
        this.ram = 256;
    }

    if (!isNaN(pulgadas) || pulgadas > 0){
        this.pulgadas = pulgadas;
    }
    else{
        this.pulgadas = 15.6;
    }

    if (fecha){
        const timestamp = Date.parse(fecha);
        if (!isNaN(timestamp)){
            this.fecha = timestamp;
        }
        else{
            this.fecha = Date.now();
        }
    }
    else{
        this.fecha = Date.now();
    }

    this.mostrarOrdenador = function (){
        let cadfecha = new Date(this.fecha).toLocaleDateString();
        let acc = accesorios.map(accesorio => `- ${accesorio}`).join("\n");
        return `ORDENADOR: ${this.marca} \nRAM: ${this.ram} \nPulgadas: ${this.pulgadas} \nAlta: ${cadfecha} \nAccesorios: ${acc}`;
    }

    this.actualizarMarcaModelo = function(nuevamarca, nuevomodelo){
        if (!isNaN(nuevamarca)){
            this.marca = 'no definida';
        }
        else{
            this.marca = nuevamarca;
        }
        if (!isNaN(nuevomodelo)){
            this.marca = 'no definido';
        }
        else{
            this.modelo = nuevomodelo;
        }
    }
    
    this.actualizarRamDiscoPulgadas =  function(nuevaram, nuevodisco, nuevapulgadas){
        if(!isNaN(nuevaram) || nuevaram > 0){
            this.ram = nuevaram;
        }
        if(!isNaN(nuevodisco) || nuevodisco > 0){
            this.disco = nuevodisco;
        }
        if(!isNaN(nuevapulgadas) || nuevapulgadas > 0){
            this.pulgadas = nuevapulgadas;
        }
    }

    this.actualizarFecha = function(nuevafecha){
        const timestamp = Date.parse(nuevafecha);
        if (!isNaN(timestamp)){
            this.fecha = timestamp;
        }
    }

    this.AnyadirAccesorios = function (...nuevoacc) {
        for (const acc of nuevoacc) {
            if (!this.accesorios.includes(acc)) {
                this.accesorios.push(acc);
            }
        }
    }

    this.borrarAccesorios = function(...accborrar){
        this.accesorios = this.accesorios.filter(acc => !accborrar.includes(acc))
    }
}

let ord1 = new Ordenador('lenovo', 'legion', 32, 256, 15.6, '2022-11-09', 'ratón', 'teclado');
let ord2 = new Ordenador('hp', 'omen', 32, 256, 15.6, '2022-11-09', 'ratón', 'teclado');
let ord3 = new Ordenador('acer', 'ferrari', 32, 256, 15.6, '2022-09-09', 'ratón', 'teclado');
let ord4 = new Ordenador('msi', 'modern', 32, 256, 15.6, '2022-08-09', 'ratón', 'teclado');

let global = [];
global.push(ord1);
global.push(ord2);
global.push(ord3);
global.push(ord4);
/*
console.log(global.reduce(function(acc, ordenador){
    let fecha = new Date(ordenador.fecha);
    fecha = fechaO.toLocaleDateString();
    acc[fecha] = (acc[fecha] || 0) + 1;
    return acc;
}, {}));*/
console.log(global.reduce(function (acc, ordenador) {
    let ordenadorFecha = new Date(ordenador.fecha);
    let fecha = ordenadorFecha.toLocaleDateString();
    acc[fecha] = (acc[fecha] || 0) + 1;
    return acc;
}, {}));

