function Ordenador(marca, modelo, ram = 16, disco = 256, pulgadas = 15.6, fecha, ...accesorios){
    this.marca = !isNaN(marca) ? 'no definida' : marca;
    this.modelo = !isNaN(modelo) ? 'no definido' : modelo;
    this.ram = !isNaN(ram) && ram > 0 ? ram : 256;
    this.pulgadas = !isNaN(pulgadas) && pulgadas > 0? pulgadas : 15.6;

    if(fecha){
        const timestamp = new Date(fecha);
        if(!isNaN(timestamp)){
            this.fecha = timestamp;
        }
        else{
            this.fecha = Date.now();
        }
    }
    else{
        this.fecha = Date.now();
    }

    this.mostrarOrdenador = function(){
        let fechamo = new Date(this.fecha).toLocaleDateString();
        let accmo = this.accesorios.map(accesorio => `- ${accesorio}`).join("\n");
        return `ORDENADOR: ${this.marca} ${this.modelo} \nRAM: ${this.ram} \nDisco: ${this.disco} \nPulgadas: ${this.pulgadas} \nALTA: ${fechamo} \nAccesorios: \n${accmo}`;
    }

    this.actualizarMarcaModelo = function(nmarca, nmodelo){
        this.marca = isNaN(nmarca) ? nmarca : `no definida`;
        this.modelo = isNaN(nmodelo) ? nmodelo : `no definido`;
    }

    this.actualizarRamDiscoPulgadas = function(nram, ndisco, npulgadas){
        if (!isNaN(nram) || nram > 0){
            this.ram = nram;
        }
        if (!isNaN(ndisco) || ndisco > 0){
            this.disco = ndisco
        }
        if (!isNaN(npulgadas) || npulgadas > 0){
            this.pulgadas = npulgadas;
        }
    }

    this.actualizarFecha = function(nfecha){
        const timestamp = new Date(nfecha);
        if(!isNaN(timestamp)){
            this.fecha = timestamp;
        }
    }

    this.anyadirAccesorios = function(...naccesorios){
        for (const naccesorio of naccesorios){
            if(!this.accesorios.includes(naccesorio)){
                this.accesorios.push(naccesorio);
            }
        }
    }

    this.borrarAccesorios = function(...baccesorios){
        this.accesorios = this.accesorios.filter(baccesorio => !baccesorios.includes(baccesorio));
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


console.log(global.reduce(function(acc, ordenador){
    const gfecha = new Date(ordenador.fecha);
    fecha = gfecha.toLocaleDateString();
    acc[fecha] = (acc[fecha] || 0) +1;
    return acc;
}, {}));
