'use strict'
import * as OBJ from './examen.js';

let ord1 = new OBJ.Ordenador('lenovo', 'legion', 32, 256, 15.6, '2022-11-09', 'ratón', 'teclado');
let ord2 = new OBJ.Ordenador('hp', 'omen', 32, 256, 15.6, '2022-11-09', 'ratón', 'teclado');
let ord3 = new OBJ.Ordenador('acer', 'ferrari', 32, 256, 15.6, '2022-09-09', 'ratón', 'teclado');
let ord4 = new OBJ.Ordenador('msi', 'modern', 32, 256, 15.6, '2022-08-09', 'ratón', 'teclado');

let global = [];
global.push(ord1);
global.push(ord2);
global.push(ord3);
global.push(ord4);

alert(OBJ.mostrarOrdenador());

console.log(OBJ.Ordenador.reduce(function(acc, ordenador){
    let fecha = new Date(OBJ.fecha);
    fecha = fecha.toLocaleDateString();
    acc[fecha] = (acc[fecha] || 0) + 1;
    return acc;
}, {}));