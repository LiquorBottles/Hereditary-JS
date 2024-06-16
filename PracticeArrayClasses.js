// Define the Juice class
class Juice {
    static contJuice = 0;

    constructor(juice, size) {
        this._idjuice = ++Juice.contJuice;
        this._juice = juice;
        this._size = size;
    }

    get idjuice() {
        return this._idjuice;
    }

    get juice() {
        return this._juice;
    }

    set juice(juice) {
        this._juice = juice;
    }

    get size() {
        return this._size;
    }

    set size(size) {
        this._size = size;
    }

    toString() {
        return `ID Juice: ${this._idjuice} Juice: ${this._juice} Size: ${this._size}`;
    }
}

// Define the juiceOrder class
class juiceOrder {
    static contjuiceOrder = 0;

    constructor(juice) {
        this._idjuiceOrder = ++juiceOrder.contjuiceOrder;
        this._juice = juice;
    }

    toString() {
        return `Order ${this._idjuiceOrder}\n${this._juice.toString()}`;
    }
}

// Define the Order class
class Order {
    static contOrder = 0;

    constructor() {
        this._idOrder = ++Order.contOrder;
        this._JuicesOrder = [];
    }

    get idOrder() {
        return this._idOrder;
    }

    addJuiceOrder(juiceOrder) {
        this._JuicesOrder.push(juiceOrder);
    }

    showOrder() {
        let orderDetails = '';
        for (let juiceOrder of this._JuicesOrder) {
            
        }
        console.log(`Order ${this._idOrder}\n${orderDetails}`);
    }
}

// Create instances of Juice
let juice1 = new Juice('Orange', 200);
let juice2 = new Juice('Lemonade', 200);

// Create instances of juiceOrder
let order1 = new juiceOrder(juice1);
let order2 = new juiceOrder(juice2);

// Print the details of juice orders
console.log(order1.toString());
console.log(order2.toString());

// Create an instance of Order and add juice orders to it
let mainOrder = new Order();
mainOrder.addJuiceOrder(order1);
mainOrder.addJuiceOrder(order2);

// Show the order details
mainOrder.showOrder();
