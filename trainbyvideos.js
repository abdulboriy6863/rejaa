console.log("Jackning oltinga teng maslahatlari");

const list = [
  "Yaxshi talaba bo'ling", // 0 - 20
  "To'g'ri boshliq tanlang va koproq hato qiling", //20 - 30
  "O'zingizni rivojlangirishni boshlang", //30 - 40
  "Siz kuchli bolgan narsalarni qiling", //40 - 50
  "Yoshlarga investitsiya qiling", //50 - 60
  "dam osez ham boladi, endi foydasi yoq", //60
];

// function maslahatBering(a, callback) {
//   setTimeout(function () {
//     if (typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//       callbacknull(null, list[5]);
//     }
//   }, 4000);
// }

// console.log("hello 1");
// maslahatBering(60, (err, data) => {
//   if (err) console.log("Error:", err);
//   else {
//     console.log(data);
//   }
// });

// console.log("hello 2");

async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(list[5]);
      }, 4000);
    });
  }
}

// maslahatBering(30)
//   .then((date) => {
//     console.log("resut:", date);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

async function run() {
  let javob = await maslahatBering(68);
  console.log(javob);
  javob = await maslahatBering(50);
  console.log(javob);
}
run();

console.log("hello");

///////
console.log("===== PRACTICE =====");

// DEFINE
function qoldiqliBolish(i, b, callback) {
  if (b === 0) {
    callback("Mahraj nolga teng emashhh", false);
  } else {
    callback(false, i % b);
  }
}

// CALL
qoldiqliBolish(10, 0, (err, data) => {
  if (err) console.log("Error:", err);
  else {
    console.log("data:", err, data);
  }
});
