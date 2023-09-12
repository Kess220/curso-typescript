function multiply(num1: number, num2: number) {
  return num1 * num2;
}

function sum(num1: number, num2: number) {
  return num1 + num2;
}

function isEven(num: number) {
  return num % 2 === 0;
}

function showResult(result: number): any {
  if (isEven(result)) {
    console.log(`The result is ${result} and it's even!`);
  } else {
    console.log(`The result is ${result} and it's even!`);
  }
}
