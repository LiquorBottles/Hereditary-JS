// Juice
class Juice{
   static juiceCont = 0
    constructor(juice,zugar,ml){
        this._idJuice = ++Juice.juiceCont;
        this._juice = juice
        this._zugar = zugar
        this._ml = ml
    }
    // Getter idjuice
    get idJuice(){
        return this._idJuice
    }

    // Getter for juice
    get juice() {
        return this._juice;
    }

    // Setter for juice
    set juice(juice) {
        this._juice = juice;
    }

    // Getter for zugar
    get zugar() {
        return this._zugar;
    }

    // Setter for zugar
    set zugar(zugar) {
        this._zugar = zugar;
    }

    // Getter for ml
    get ml() {
        return this._ml;
    }

    // Setter for ml
    set ml(ml) {
        this._ml = ml;
    }   
    
    toString(){
        return `ID: ${this._idJuice}, Juice: ${this._juice}, Sugar: ${this._zugar}, Ml: ${this._ml}`;
    }
}

class Apple extends Juice{
    constructor(juice,zugar,ml){
        super(juice,zugar,ml)

    }
}

class Orange extends Juice{
    constructor(juice,zugar,ml){
        super(juice,zugar,ml)
    }
}
class Lemonade extends Juice{
    constructor(juice,zugar,ml){
        super(juice,zugar,ml)
    }
}

class Coco extends Juice{
    constructor(juice,zugar,ml,milk){
        super(juice,zugar,ml)
        this._milk = milk
    }
    get milk(){
        return this._milk;
    }
    set milk(milk){
        this._milk = milk
    }
    toString(){
        return `${super.toString()} ${this._milk}`;
    }
}

// Soda Class
class Soda{
    static sodaCont = 0;
    constructor(soda,zugar,ml){
        this._idSoda = ++Soda.sodaCont
        this._soda = soda
        this._zugar = zugar
        this._ml = ml
    }
    get idSoda(){
        return this._idSoda
    }
    //getter and setter soda
    get soda(){
        return this._soda
    }

    set soda(soda){
        this._soda = soda
    }

    // Getter n Setter zugar
    get zugar(){
        return this._zugar
    }
    set zugar(zugar){
        this._zugar = zugar
    }

    // Getter n Setter ml
    get ml(){
        return this._ml;
    }
    
    set ml(ml){
        this._ml = ml
    }

    toString(){
        return `${this.idSoda} ${this._soda} ${this._zugar} ${this._ml}`
    }

}

let orange1 = new Orange("Orange","Low",300)
console.log(orange1.toString())
let juice2 = new Juice("Lemonade","Low",400)
console.log(juice2.toString())
let Lemonade1 = new Lemonade('Lemonade','Low',400)
console.log(Lemonade1.toString())
let coco1 = new Coco("Coco",'Low',500,"No milk")
console.log(coco1.toString())
let soda1 = new Soda('Coca-Cola','Zero',500)
console.log(soda1.toString())
let soda2 = new Soda('Canada-Dry','Normal','500')
console.log(soda2.toString())
let soda3 = new Soda('Dr.Pepper',"Low",400);
console.log(soda3.toString())
let juice6 = new Juice("Watermelon","Low",500)
console.log(juice6.toString())