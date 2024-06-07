// Skibidi
class Skibidi{
    static numSkibidi = 0;
    constructor(powerRating,skibi,toilet,date){
        this._idSkibidi = ++Skibidi.numSkibidi;
        this._poweRating = powerRating
        this._skibidi = skibi
        this._toilet = toilet
        this._date = date
    }
    //Get
    get this_idSkibidi(){
        return this.this_idSkibidi
    }

    get powerRating(){
        return this._poweRating
    }

    get skibi(){
        return this._skibidi
    }

    get toilet(){
        return this._toilet
    }

    get date(){
        return this._date
    }

    //Set
   

    set skibi(skibi){
        this._skibidi = skibi
    }

    set toilet(toilet){
        this.toilet = toilet
    }

    set date(date){
        this._date = date
    }
    toString() {
        return `${this._idSkibidi}: PowerRating ${this._poweRating} ${this._skibidi} ${this._toilet} ${this._date}`;
    }
}

let skibi1 = new Skibidi(5,"Jose","Garcia",new Date())
console.log(skibi1.toString())
let skibidi2 = new Skibidi(9,'Fernando','Estrada',new Date())
console.log(skibidi2.toString())

class cars extends Skibidi{
    contcars = 0;
    constructor(powerRating,skibi,toilet,date,id,brand){
        super(powerRating,skibi,toilet,date)
        this._id = id
        this._brand = brand
    }

    // Getters
    get id() {
        return this._id;
    }

    get brand() {
        return this._brand;
    }

    get idCars() {
        return this._idCars;
    }

    // Setters
    set id(id) {
        this._id = id;
    }

    set brand(brand) {
        this._brand = brand;
    }

    toString() {
        return `${super.toString()} ID: ${this._id}, Brand: ${this._brand}`;
    }
}

let car1 = new cars(10, "Speedy", "Luxury", new Date(), 101, "CameraMan");
console.log(car1.toString());