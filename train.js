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

// class Shop {
//   apple;
//   cola;
//   lagmon;
//   constructor(apple, cola, lagmon) {
//     this.apple = apple;
//     this.cola = cola;
//     this.lagmon = lagmon;
//   }

//   qoldiq() {
//     console.log(
//       `At current time ${moment().format("HH:ss")} there are ${
//         this.apple
//       } apple, ${this.cola} cola and ${this.lagmon} lagmon
//       `
//     );
//   }
//   sotish(count, name) {
//     if (name == "apple") {
//       return (this.apple -= count);
//     } else if (name == "cola") {
//       return (this.cola -= count);
//     } else if (name == "lagmon") {
//       return (this.lagmon -= count);
//     }
//   }
//   qabul(count, name) {
//     if (name == "apple") {
//       return (this.apple += count);
//     } else if (name == "cola") {
//       return (this.cola += count);
//     } else if (name == "lagmon") {
//       return (this.lagmon += count);
//     }
//   }
// }

// const MyShop = new Shop(5, 4, 6);

// MyShop.qoldiq();
// MyShop.qabul(4, "apple");
// MyShop.qoldiq();
// console.log("=============");
// MyShop.sotish(9, "apple");
// MyShop.qoldiq();

// TASK D
// const checkContent = (a, b) => {
//   if (
//     a.length === a.length &&
//     a.split("").sort().join() == b.split("").sort().join()
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(checkContent("salom", "mloas"));

//TASK E
// function getReverse(a) {
//   let result = a.split("").reverse().join("");
//   console.log(result);
// }
// getReverse("hello");

//TASK F
// function findDoublers(a) {
//   const result = a.includes("oo");
//   console.log(result);
// }

// findDoublers("heloo");

// function getHighestIndex(a) {
//   const result = a.map((eleEle, index) => {
//     console.log(`${index}: ${eleEle}`);
//     return eleEle > 1;
//   });
// }

// const animals = [10, 50, 50, 87];

// const a = Math.max(...animals);
// const b = animals.indexOf(a);
// const c = a + b;
// console.log(c);

//TASK G
function getHighestIndex(a) {
  // return Math.max(...a);
  const maxValue = Math.max(...a);
  const maxIndex = a.indexOf(maxValue);
  console.log(
    `Bu ${maxValue} soni arraynig tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi ${maxIndex} qaytadi`
  );
}
getHighestIndex([40, 24, 125]);
