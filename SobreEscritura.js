//SobreEscritura
class Empleado{
    static contEmpleado
    constructor(nombre,sueldo){
        this._idEmpleado = ++Empleado.contEmpleado
        this._nombre = nombre
        this._sueldo = sueldo
    }
    get idEmpleado(){
        return this._idEmpleado
    }
    obtenerDetalles(){
        return `${this._nombre} - Sueldo: ${this._sueldo} -`
    }
}

class Gerente extends Empleado{
    static contGerente = 0
    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo)
        this._idGerente = ++Gerente.contGerente
        this._departemento = departamento
    }
    get idGerente(){
        return this._idGerente
    }
    obtenerDetalles(){
        return `${super.obtenerDetalles()} Depto: ${this._departemento} `
    }
}
let empleado1 = new Empleado('Jose',2000)
console.log(empleado1.obtenerDetalles())
let gerente1 = new Gerente('Ruben',10000,'Sistemas')
console.log(gerente1.obtenerDetalles())