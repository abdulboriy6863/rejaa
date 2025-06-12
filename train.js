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

const moment = require("moment");

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
MyShop.sotish(4, "apple");
MyShop.qoldiq();
MyShop.qabul(10, "hello");
MyShop.qoldiq();
