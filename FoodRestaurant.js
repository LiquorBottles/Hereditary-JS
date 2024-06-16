// Class Food
class Food{
    static contFood = 0
    constructor(food,priceFood){
        this._idFood = ++Food.contFood
        this._Food = food
        this._PriceFood = priceFood
    }

    // get idFood
    get idFood(){
        return this._idFood
    }

    // Get n Set food
    get food(){
        return this._Food
    }

    set food(food){
        this._Food = food
    }

    // Get n Set Price
    get priceFood(){
        return this._PriceFood
    }
    set priceFood(priceFood){
        this._PriceFood = priceFood
    }
    // ToString
    toString(){
        return `Food: ${this._idFood} - ${this._Food} - Price: ${this._PriceFood}`
    }
}

// Class Drink
class Drink{
    static contDrink = 0
    constructor(drink,size,sugar,priceDrink){
        this._idDrink = ++Drink.contDrink
        this._Drink = drink
        this._Size = size
        this._Sugar = sugar
        this._PriceDrink = priceDrink
    }
    // Get idDrink
    get idDrink(){
        return this._idDrink
    }

    // Set n Get drink
    get drink(){
        return this._Drink
    }

    set drink(drink){
        this._drink = drink
    }

    // Set n Get size
    get size(){
        return this._Size
    }

    set size(size){
        this._Size = size
    }

    // Set n Get sugar
    get sugar(){
        return this._Sugar
    }

    set sugar(sugar){
        this._Sugar = sugar
    }
    // set n get price
    get priceDrink(){
        return this._PriceDrink
    }

    set priceDrink(priceDrink){
        this._PriceDrink = priceDrink
    }
    
    //toString
    toString(){
        return `Drink: ${this._idDrink} - ${this._Drink} - Ml: ${this._Sugar} -  Sugr: ${this._Size} - Price: ${this._PriceDrink}`
    }
}

// Order Class
class Meal{
    static contMeal = 0
    constructor(Food,Drink){
        this._idMeal = ++Meal.contMeal
        this._Food = Food
        this._Drink = Drink
    }
    get idMeal(){
        return this._idMeal
    }
    //toString
    toString(){
        return `Meal: ${this.idMeal} - ${this._Food}:\n${this._Drink}`
    }
}

// Order Class
class Order{
    static contOrder = 0
    constructor(){
        this._idOrder = ++Order.contOrder
        this._order = []
    }
    // Get IDOrder
    get idOrder(){
        return this._idOrder

    }
    addOrder(order){
        this._order.push(order)
    }
    showOrder(){
        let orderDetails = ''
        for(let order of this._order){
            orderDetails += `\n${order.toString()}`
        }
        console.log(`IDOrder: ${this._idOrder}${orderDetails} `)
    }
}
let food1 = new Food('Pizza', 9)
let drink1 = new Drink('Lemonade','Low',300,2)
console.log(food1.toString())
console.log(drink1.toString())
let meal1 = new Meal(food1,drink1)
console.log(meal1.toString())
let order1 = new Order()
order1.addOrder(meal1)
order1.showOrder()

let food2 = new Food('Sushi',8.99)
let drink2 = new Drink('Sprite','Low',300,2)
let meal2 = new Meal(food2,food2)
let order2 = new Order()
order2.addOrder(meal2)
order2.showOrder()