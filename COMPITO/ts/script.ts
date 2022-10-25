let randomNumber = Math.random() * (100 - 1) + 1;
console.log(randomNumber);
let wholeNumber = Math.floor(randomNumber);
console.log(wholeNumber);

function compareNumbers() {
  let firstNumberElement: HTMLInputElement | null = document.getElementById(
    "first-number"
  ) as HTMLInputElement;
  let secondNumberElement: HTMLInputElement | null = document.getElementById(
    "second-number"
  ) as HTMLInputElement;

  let firstNumber = parseFloat(firstNumberElement.value);
  let secondNumber = parseFloat(secondNumberElement.value);

  let firstComparison: number;
  let secondComparison: number;
  // if (firstNumber > wholeNumber) {
  //   firstComparison = (wholeNumber - firstNumber) * -1;
  // } else {
  firstComparison = Math.abs(wholeNumber - firstNumber);
  // }

  console.log(firstComparison);
  // if (secondNumber > wholeNumber) {
  //   secondComparison = (wholeNumber - secondNumber) * -1;
  // } else {
  secondComparison = Math.abs(wholeNumber - secondNumber);
  // }
  console.log(secondComparison);
  console.log(firstNumber, secondNumber);
  if (firstComparison < secondComparison) {
    console.log("First Player wins");
  } else {
    console.log("Second player wins");
  }
}

//compareNumbers();

// let randomNumber = Math.random() * (100 - 1) + 1;
// console.log(randomNumber);
// let wholeNumber = Math.floor(randomNumber);
// console.log(wholeNumber);
// let firstNumber = Math.floor(Math.random() * (100 - 1) + 1);
// let secondNumber = Math.floor(Math.random() * (100 - 1) + 1);
// let firstComparison: number;
// let secondComparison: number;

// if (firstNumber > wholeNumber) {
//   firstComparison = (wholeNumber - firstNumber) * -1;
// } else {
//firstComparison = wholeNumber - firstNumber;
// }
//console.log(firstComparison);

// if (secondNumber > wholeNumber) {
//   secondComparison = (wholeNumber - secondNumber) * -1;
// } else {
//secondComparison = wholeNumber - secondNumber;
// }
//console.log(secondComparison);

// function compareNumbers() {
//   if (Math.abs(firstComparison) < Math.abs(secondComparison)) {
//     console.log("First Player wins");
//   } else {
//     console.log("Second player wins");
//   }
//   console.log(firstComparison);
//   console.log(secondComparison);
// }

// compareNumbers();
