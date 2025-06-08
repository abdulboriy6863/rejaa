// //TASK A;
// function cauntLetter(harf, soz) {
//   const result = soz.split("");
//   console.log(result);
//   const last = result.filter((i) => i === harf);
//   console.log(`${soz}ning ichida ${last.length} ta ${harf} bor`);
// }
// cauntLetter("e", "enginer");

//TASK B;
function countDigits(a) {
  const result2 = a.split("");
  const last = result2.filter((i) => {
    //buni terneria operatori deydi
    return i >= 1 ? i : null;
  });
  console.log(`${last.length} ta raqam bor`);
}
countDigits("jsjkss088mn89nsm");
