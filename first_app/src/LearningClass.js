class Car {
    constructor(model) {
        this.brand = model;
    }

    present() {
        return "I have a " + this.brand;
    }
}

class Year extends Car {
    constructor(brand, price) {
        super(brand);
        this.price = price;
    }

    show() {
        return this.present() + ", it is " + this.price + " dollars";
    }
}

const mycar = new Car("Spider");
console.log(mycar);
console.log(mycar.brand);
console.log(mycar.present());


const myprice = new Year("G-wagon", `$10000`);
console.log(myprice)
console.log(myprice.brand)
console.log(myprice.price)
console.log(myprice.show)