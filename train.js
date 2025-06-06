//TASK A;
function cauntLetter(harf, soz) {
  const result = soz.split("");
  console.log(result);
  const last = result.filter((i) => i === harf);
  console.log(`${soz}ning ichida ${last.length} ta ${harf} bor`);
}

cauntLetter("e", "enginer");
