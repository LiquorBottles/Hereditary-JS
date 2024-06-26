// Class Cliente

class Cliente{
    static contadorCliente = 0;

    constructor(fechaRegistro){
        this._idCliente = ++Cliente.contadorCliente
        this._fechaRegistro = fechaRegistro
    }
    get _idCliente(){
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