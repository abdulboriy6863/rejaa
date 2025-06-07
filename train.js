// //TASK A;
// function cauntLetter(harf, soz) {
//   const result = soz.split("");
//   console.log(result);
//   const last = result.filter((i) => i === harf);
//   console.log(`${soz}ning ichida ${last.length} ta ${harf} bor`);
// }

// cauntLetter("e", "enginer");

// function cauntLetter(number) {
//   const result = number.split("");
//   console.log(result);
//   const last = result.filter((number) => number === number);
//   console.log(
//     `${number}ning ichida ${last.length} shuncha raqam ${number} bor`
//   );
// }

// function countDigits(a) {
//   const result2 = a.split("");
//   console.log(result2);
//   const lastResult = result2.filter(a);
//   if (a == number) {
//     return `${number.length} ta son bor`;
//   } else {
//     return "hech qanday son qatnashmagan";
//   }
// }

// countDigits("kdafljl09348ad3jkn");

console.log("TASK2");
// function countDigits(a) {
//   if (typeof a === "number") {
//     const last = a.filter((i) => i === a);
//     console.log(`${last.length} ta raqam bor`);
//   }
//   //   else {
//   // //     console.log("hech qanday raqam yo'q");
//   // //   }
// }

// countDigits("349dskfjl390");

// function countDigits(a) {
//   const result2 = a.split("");
//   if (typeof result2 !== "number") {
//     const last = result2.filter((i) => {
//       return i >= 0 ? i : null;
//     });
//     console.log(`${last.length} ta raqam bor`);
//   }
// }
// countDigits("jsjkssmnxnsm");

function countDigits(a) {
  const result2 = a.split("");
  const last = result2.filter((i) => {
    //buni terneria operatori deydi
    return i >= 0 ? i : null;
  });
  console.log(`${last.length} ta raqam bor`);
}
countDigits("jsjkss088mnxnsm");
