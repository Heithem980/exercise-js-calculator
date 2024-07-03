const userNum1 = prompt("Enter a number: ");
const userNum2 = prompt("Enter a another number: ");

const method = prompt(
  "Vilket räknesätt vill du använda?  endast +, -, * och / är möjliga."
);

const num1 = parseInt(userNum1);
const num2 = parseInt(userNum2);


if (isNaN(num1) || isNaN(num2)) {
    alert("Felaktig inmatning!  ange giltiga siffror.");
  }

if (method == "+") {

    result = num1 + num2;

} else if (method == "-") {

  result = num1 - num2;

} else if (method == "*") {

    result = num1 * num2;

} else if (method == "/") {

    result = num1 / num2;

} else {

  alert("Felinmattning! ");

  console.log("Alert is dismissed");
}


if (result !== undefined) {
    alert("Result: " + result);
  }