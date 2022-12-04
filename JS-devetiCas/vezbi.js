class Car {
    model;
    color;
    year;
    maxSpeed;
    currentSpeed;
   // acceleration;

    constructor (model, color, year, maxSpeed, currentSpeed) {
        this.model = model;
        this.color = color;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.currentSpeed = currentSpeed;
        //this.acceleration = this.acceleration;
    }
    // metod za ubrzuvanje
    accelerate(speed){
        if(this.currentSpeed + speed >= this.maxSpeed) {
           console.log ("you reached the max speed")
           return
        } 
        this.currentSpeed += speed;
}

   // za namaluvanje
    decelerate (speed){
        if(this.currentSpeed - speed <= 0) {
            console.log ("stop")
            return
        } 
        this.currentSpeed -= speed;
    }
}

const Audi = new Car ('Audi','white','2000', '240', '140')
const BMW = new Car ('BMW','Red','2020', '240', '100')

console.log(Audi)

//setInterval(() => {
    Audi.decelerate(20)
    console.log(Audi.currentSpeed)
  }, 1000)


// nova zadaca


class shoppingCard {
   #products 
   #budget

   constructor(products,budget){
    this.products = products;
    this.budget= budget;
}

//funkcija metod

addItem(newProduct){
    const newList =  [...this.products, newProduct]
    const totalPrice = newList.reduce((sum, currentProduct) => sum += currentProduct.price, 0)
    if(totalPrice > this.budget){
        console.log("budget has been reached")
        return
    }
    this.products = newList;
}
getitems (){
    return this.products
}

removeItem(productName) {
this.products = this.products.filter(product => product.name !== productName)
    }
}

class products {
    name;
    price;

    constructor(name,price){
        this.name = name;
        this.price = price;
    }
}


const card = new shoppingCard ([], 1000);

const Banana = new products ('banana', 10)
const Orange = new products ('orange', 20)
const Kiwi = new products ('kiwi', 30)

card.addItem(Banana)
card.addItem(Orange)
card.addItem(Kiwi)



console.log(card)

card.removeItem("orange")

// nova vezba

// nasleduvanje

class product2 extends products {
    weight;
    color;

    constructor(name, price, weight, color) {
         super(name, price) // gi kopira site klasi od prethodnata klasa, name i budget
        this.weight = weight;
        this.color = color;
    }

    // metodite 
    // 
}
const newList = new product2('orange', '20','30','orange')
console.log(newList)