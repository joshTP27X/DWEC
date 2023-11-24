let fecha = 0;
function Ordenador(marca, modelo, ram = 16, disco = 256, pulgadas = 15.6, fecha, ...accesorios){
    this.marca = !isNaN(marca) ? 'no definida' : marca;
    this.marca = !isNaN(modelo) ? 'no definido' : modelo;
    this.marca = !isNaN(ram) && ram > 0 ? ram : 256;
    this.marca = !isNaN(pulgadas) && ram > 0 ? pulgadas : 15.6;

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
        let mfecha = new Date(this.fecha).toLocaleDateString();
        let macc = this.accesorios.map(acc => `- ${acc}`).join(`\n`);
        return `ORDENADOR: ${this.marca} ${this.modelo} \nRAM: ${this.ram} \nDisco: ${this.disco} \nPulgadas: ${this.pulgadas} \nALTA: ${mfecha} \nAccesorios: \n${macc}`;
    }

    this.actualizarRamDiscoPulgadas = function(nram, ndisco, npulgadas){
        if (!isNaN(nram) && nram > 0){
            this.ram= nram;
        }
        if (!isNaN(ndisco) && ndisco > 0){
            this.disco = ndisco;
        }
        if (!isNaN(npulgadas) && npulgadas > 0){
            this.pulgadas = npulgadas;
        }
    }

    this.actualizarFecha = function(nfecha){
        const timestamp = Date.parse(nfecha);
        if (!isNaN(timestamp)){
            this.fecha = timestamp;
        }
    }

    this.añadirAccesorios = function(...naccs){
        for (const nacc of naccs){
            if (!this.accesorios.includes(nacc)){
                this.accesorios.push(nacc);
            }
        }
    }

    this.borrarAccesorios = function(...baccs){
        this.accesorios = this.accesorios.filter(bacc => !baccs.includes(bacc));
    }

}

export{
    Ordenador,
    fecha
}


