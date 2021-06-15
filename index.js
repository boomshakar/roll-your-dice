var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceClass1 = document.querySelectorAll(".img1")[0];
var diceClass2 = document.getElementsByClassName("img2")[0];
var diceUrl1 = "images/dice" + randomNumber1 + ".png";
var diceUrl2 = "images/dice" + randomNumber2 + ".png";

var rollDice1 = diceClass1.setAttribute("src", diceUrl1);
var rollDice2 = diceClass2.setAttribute("src", diceUrl2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩 Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 wins 🚩";
} else {
  document.querySelector("h1").textContent = "Draw";
}

console.log(randomNumber1);
console.log(randomNumber2);
// There are lots of ways to go aobout this random stuff 😁

// function diceImage1() {
//   if (randomNumber1 <= 1) {
//     document
//       .getElementsByClassName("img1")[0]
//       .setAttribute("src", "images/dice1.png");
//   } else if (randomNumber1 == 2) {
//     document
//       .getElementsByClassName("img1")[0]
//       .setAttribute("src", "images/dice2.png");
//   } else if (randomNumber1 == 3) {
//     document
//       .getElementsByClassName("img1")[0]
//       .setAttribute("src", "images/dice3.png");
//   } else if (randomNumber1 == 4) {
//     document
//       .getElementsByClassName("img1")[0]
//       .setAttribute("src", "images/dice4.png");
//   } else if (randomNumber1 == 5) {
//     document
//       .getElementsByClassName("img1")[0]
//       .setAttribute("src", "images/dice5.png");
//   } else {
//     document
//       .getElementsByClassName("img1")[0]
//       .setAttribute("src", "images/dice6.png");
//   }
// }

// function diceImage2() {
//   if (randomNumber2 <= 1) {
//     document
//       .getElementsByClassName("img2")[0]
//       .setAttribute("src", "images/dice1.png");
//   } else if (randomNumber2 == 2) {
//     document
//       .getElementsByClassName("img2")[0]
//       .setAttribute("src", "images/dice2.png");
//   } else if (randomNumber2 == 3) {
//     document
//       .getElementsByClassName("img2")[0]
//       .setAttribute("src", "images/dice3.png");
//   } else if (randomNumber2 == 4) {
//     document
//       .getElementsByClassName("img2")[0]
//       .setAttribute("src", "images/dice4.png");
//   } else if (randomNumber2 == 5) {
//     document
//       .getElementsByClassName("img2")[0]
//       .setAttribute("src", "images/dice5.png");
//   } else {
//     document
//       .getElementsByClassName("img2")[0]
//       .setAttribute("src", "images/dice6.png");
//   }
// }

// diceImage1();
// diceImage2();

// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").textContent = "🚩 Player 1 wins";
// } else if (randomNumber1 < randomNumber2) {
//   document.querySelector("h1").textContent = "Player 2 wins 🚩";
// } else {
//   document.querySelector("h1").textContent = "Draw";
// }

// console.log(randomNumber1);
// console.log(randomNumber2);
