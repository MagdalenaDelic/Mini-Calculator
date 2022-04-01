let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let display_result = document.querySelector("#display_result");

function AddTwoNumber(a, b) {
  let sum = a + b;
  return sum;
}

function SubtractTwoNumber(a, b) {
  let diff = a - b;
  return diff;
}
function DivideTwoNumber(a, b) {
  let quatient = a / b;
  return quatient;
}

function MultiplyTwoNumber(a, b) {
  let product = a * b;
  return product;
}

plus.addEventListener("click", function () {
  let num_1 = parseInt(num1.value);
  let num_2 = parseInt(num2.value);

  display_result.innerHTML = AddTwoNumber(num_1, num_2);
});
minus.addEventListener("click", function () {
  let num_1 = parseInt(num1.value);
  let num_2 = parseInt(num2.value);

  display_result.innerHTML = SubtractTwoNumber(num_1, num_2);
});

divide.addEventListener("click", function () {
  let num_1 = parseInt(num1.value);
  let num_2 = parseInt(num2.value);

  display_result.innerHTML = DivideTwoNumber(num_1, num_2);
});
multiply.addEventListener("click", function () {
  let num_1 = parseInt(num1.value);
  let num_2 = parseInt(num2.value);

  display_result.innerHTML = MultiplyTwoNumber(num_1, num_2);
});
