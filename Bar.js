// Bar - Club

//Class Drink
class Drink{
    static contDrink = 0
    constructor(drink,ml,price){
        this._idDrink = ++Drink.contDrink
        this._drink = drink
        this._ml = ml
        this._price = price
    }
    //Get idDrink
    get idDrink(){
        return this._idDrink
    }

    //Get n set drink
    get drink(){
        return this._drink
    }
    set drink(drink){
        this._drink = drink
    }

    // Get n set ml
    get ml(){
        return this._ml
    }

    set ml(ml){
        this._ml = ml
    }

    //Get n set price
    get price(){
        return this._price
    }
    
    set price(price){
        this._price = price
    }

    toString(){
        return `Drink ${this._idDrink} - ${this._drink} - Ml: ${this._ml} - Price: ${this._price}`
    }
}
let drink1 = new Drink('Vodka',300,7)

//Food class
class Food{
    static contFood = 0
    constructor(food,price){
        this._idFood = ++Food.contFood
        this._food = food
        this._price = price
    }
    
    //get idFood
    get idFood(){
        return this._idFood
    }

    // Get n set food
    get food(){
        return this._food
    }

    set food(food){
        this._food = food
    }

    // set n get price
    get price(){
        return this._price
    }

    set price(price){
        this._price = price
    }
    // toString
    toString(){
        return `Food ${this._idFood} -  ${this._food} - Price:  ${this._price}$`
    }
}
let food1 = new Food('Pizz',10)
let food2 = new Food('Sushi',7)
console.log(food1.toString())
console.log(food2.toString())

//Meal class
class Meal{
    static contMeal = 0
    constructor(food,drink){
        this._idMeal = ++Meal.contMeal
        this._food = food
        this._drink = drink
    }
    toString(){
        return `Meal ${this._idMeal} ${this._food} ${this._drink}`
    }
}
let meal1 = new Meal(food1,drink1)
console.log(meal1.toString())