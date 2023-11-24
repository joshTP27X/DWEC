import * as ORD from './ixam2.js';

let ord1 = ORD.Ordenador('lenovo', 'legion', 32, 256, 15.6, '2022-11-09', 'ratón', 'teclado');
let ord2 = ORD.Ordenador('hp', 'omen', 32, 256, 15.6, '2022-11-09', 'ratón', 'teclado');
let ord3 = ORD.Ordenador('acer', 'ferrari', 32, 256, 15.6, '2022-09-09', 'ratón', 'teclado');
let ord4 = ORD.Ordenador('msi', 'modern', 32, 256, 15.6, '2022-08-09', 'ratón', 'teclado');

let global = [];

global.push(ord1);
global.push(ord2);
global.push(ord3);
global.push(ord4);

let nmo = global.reduce(function(acc, ordenador){
    let rfecha = new Date(ordenador.fecha);
    this.fecha = rfecha.toLocaleDateString();
    acc[fecha] = (acc[fecha] || 0) + 1 ;
    return acc;
}, {});

console.log(nmo);