// Proyecto mundo pc

class DispositivoEntrada{
    constructor(tipoEntrada,marca){

        this._tipoEntrada = tipoEntrada
        this._marca = marca

    }
    
    //set n get tipoEntrad
    get tipoEntrada(){
        return this._tipoEntrada
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada
    }

    // Set n get marca
    get marca(){
        return this._marca
    }

    set marca(marca){
        this._marca = marca
    }
}

class Raton extends DispositivoEntrada{
    static contRaton = 0
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca)
        this._idRaton = ++Raton.contRaton
    }
    // get idraton
    get idRaton(){
        return this._idRaton
    }

    toString(){
        return `IDRaton: ${this._idRaton}, Entrada: ${this.tipoEntrada}, Marca: ${this._marca}`
    }
}

let raton1 = new Raton('usb','hp')
console.log(raton1.toString())
let raton2 = new Raton('C','Dell')
raton2.marca = 'SKibidi'
console.log(raton2.toString())

class Teclado extends DispositivoEntrada{
    static contTeclado = 0
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca)
        this._idTeclado = ++Teclado.contTeclado
    }
    get idTeclado(){
        return this._idTeclado
    }

    toString(){
        return `IDTecldo: ${this.idTeclado}, Entrada: ${this.tipoEntrada} Marca: ${this._marca}`
    }
}

let teclado1 = new Teclado('C','Razer')
console.log(teclado1.toString())

class Monitor{
    static contMonitor = 0
    constructor(marca,size){
        this._idMonitor = ++Monitor.contMonitor
        this._marca = marca
        this._size = size
    }
    // get idmonitor
    get idMonitor(){
        return this._idMonitor
    }

    // get n set marcaa
    get marca(){
        return this._marca
    }

    set marca(marca){
        this._marca = marca
    }

    // Get n set size
    get size(){
        return this._size
    }

    set size(size){
        this._size = size
    }

    toString(){
        return `ID Monitor: ${this._idMonitor}, Marca:  ${this._marca}, Size: ${this._size},` 
    }
}
let monitor1 = new Monitor('Dell',24)
console.log(monitor1.toString())
let monitor2 = new Monitor('Benq',27)
console.log(monitor2.toString())

class PC{
    static contPC = 0
    constructor(nombre,monitor,raton,teclado){
        this._idPC = ++PC.contPC
        this._nombre = nombre
        this._monitor = monitor
        this._raton = raton
        this._teclado = teclado
    }

    // Get idpc
    toString(){
        return  `PC: ${this._idPC} ${this._nombre}: \n${this._monitor}\n${this._raton}\n${this._teclado}`
    }

}
let pc1 = new PC('HP',monitor1, raton1, teclado1)
console.log(pc1.toString())
let pc2 = new PC('Armada',monitor1,raton1,teclado1)
console.log(pc2.toString())

class Orden{
    static contOrden = 0
    constructor(){
        this._idOrden = ++Orden.contOrden
        this._computadoras = []

    }
    //Get id orden
    get idOrden(){
        return this._idOrden
    }
    agregarComputadore(computadoras){
        this._computadoras.push(computadoras)
    }
    mostrarOrden(){
        let computadorasOrden = ''
        for(let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`
        }
        console.log(`orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`)
    }


}
let orden1 = new Orden()
orden1.agregarComputadore(pc1)
orden1.agregarComputadore(pc2)
orden1.mostrarOrden()

let orden2 = new Orden()
orden2.agregarComputadore(pc2)
orden2.mostrarOrden()