// //TASK A;
// function cauntLetter(harf, soz) {
//   const result = soz.split("");
//   console.log(result);
//   const last = result.filter((i) => i === harf);
//   console.log(`${soz}ning ichida ${last.length} ta ${harf} bor`);
// }
// cauntLetter("e", "enginer");

//TASK B;
// function countDigits(a) {
//   const result2 = a.split("");
//   const last = result2.filter((i) => {
//     //buni terneria operatori deydi
//     return i >= 1 ? i : null;
//   });
//   console.log(`${last.length} ta raqam bor`);
// }
// countDigits("jsjkss088mn89nsm");
//TASK C;
// const moment = require("moment");
// const now = moment("h:mm:ss");

// class Shop {
//   constructor(now, amount, product) {
//     this.now = now;
//     this.amount = amount;
//     this.product = product;
//   }
//   qoldiq() {
//     console.log(
//       `Hello my friend at the moment ${this.now}, this is your available product ${this.amount} ${this.product} `
//     );
//   }
//   sotish(addProduct) {
//     this.amount = this.amount - addProduct;
//     console.log(
//       `Hello my friend at the moment ${this.now}, now ${this.amount} ${this.product} sold`
//     );
//   }
//   qabul(addProduct) {
//     this.amount = this.amount + addProduct;
//     console.log(
//       `Hello my friend at the moment ${this.now}, ${this.amount} ${this.product} added`
//     );
//   }
// }

// const MyShop = new Shop(now, 15, "apple");

// MyShop.qoldiq();

const moment = require("moment");
// console.log(now);

// const product1 = {
//   name: "Apple",
//   amount: 5,
// };
// const product2 = {
//   name: "Banana",
//   amount: 10,
// };
// const product3 = {
//   name: "Strowberry",
//   amount: 15,
// };
// class Shop {
//   product1;
//   product2;
//   product3;
//   constructor(product1, product2, product3) {
//     this.product1 = product1;
//     this.product2 = product2;
//     this.product3 = product3
//   }
//   qoldiq() {
//     console.log(
//       `At the momment ${now}, Available products ${product1.name} ${product1.amount}, ${product2.name} ${product2.amount}, ${product3.name} ${product3.amount}`
//     );
//   }
//   sell(count) {
//     if (product1.amount + count && product1.name == product1.name)
//       product1.amount = product1.amount + count;
//   }
//   buy(count) {
//     amount = amount + count;
//   }
// }

// const MyShop = new Shop("product1", "product2", "product3");
// MyShop.qoldiq();
// MyShop.sell(10, "apple");

class Shop {
  apple;
  cola;
  lagmon;
  constructor(apple, cola, lagmon) {
    this.apple = apple;
    this.cola = cola;
    this.lagmon = lagmon;
  }

  qoldiq() {
    console.log(
      `At current time ${moment().format("HH:ss")} there are ${
        this.apple
      } apple, ${this.cola} cola and ${this.lagmon} lagmon 
      `
    );
  }
  sotish(count, name) {
    if (name == "apple") {
      return (this.apple -= count);
    } else if (name == "cola") {
      return (this.cola -= count);
    } else if (name == "lagmon") {
      return (this.lagmon -= count);
    }
  }
  qabul(count, name) {
    if (name == "apple") {
      return (this.apple += count);
    } else if (name == "cola") {
      return (this.cola += count);
    } else if (name == "lagmon") {
      return (this.lagmon += count);
    } else if (name === "" || name === "number") {
      return "Bunday ovqat mavjud emas";
    }
  }
}

const MyShop = new Shop(5, 4, 6);

MyShop.qoldiq();
MyShop.sotish(4, "lagmon");
MyShop.qoldiq();
MyShop.qabul(10, "hello");
MyShop.qoldiq();
