// Prueba  persona

// Class Persona
class Persona{
    
    static contadorPersona = 0

    constructor(nombre,apellido,edad){
        this._idPersona = ++Persona.contadorPersona
        this._nombre = nombre
        this._apellido = apellido
        this._edad = edad

    }
    // Get
    get idPersona(){
        return this._idPersona
    }

    get nombre(){
        return this._nombre
    }   

    set nombre(nombre){
        this._nombre = nombre
    }

    get apellido(){
        return this_._apellido
    }

    set apellido(apellido){
        this._apellido = apellido
    }
    get edad(){
        return this._edad
    }
    set edad(edad){
        this._edad = edad
    }
    
    // Metodod tostring
    toString(){
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this.edad}`
    }
}

// Class Empleado
class empleado extends Persona{
    static contadorEmpleado = 0

    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad)
        this._idEmpleado = ++empleado.contadorEmpleado
        this._sueldo = sueldo

    }
    get idEmpleado(){
        return this._idEmpleado
    }

    get sueldo(){
        return this._sueldo
    }
    set sueldo(sueldo){
        this._sueldo = sueldo
    }

    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`
    }
}

// Class Cliente

class Cliente extends Persona{
    static contadorCliente = 0;
  
    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad)
        this._idCliente = ++Cliente.contadorCliente
        this._fechaRegistro = fechaRegistro
    }
    get idCliente(){
        return this._idCliente
    }

    get fechaRegistro(){
        return this._fechaRegistro
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro
    }
    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`
    }
}

// Prueba de las clases
let persona1 = new Persona('Juan','Perez',18)
console.log(persona1.toString())
let persona2 = new Persona('Jose','Garcia',20)
console.log(persona2.toString())

let empleado1 = new empleado('Limon','Garcia',19,7000)
console.log(empleado1.toString())

let cliente1 = new Cliente('Maria Laura','Izaguirre',15,new Date())
console.log(cliente1.toString())
let cliente2 = new Cliente('Fernando','Estrada',19,new Date())
console.log(cliente2.toString())