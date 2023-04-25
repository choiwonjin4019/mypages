function calculate() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;

  let result;
  switch (operator) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
    default:
      result = "잘못된 연산자입니다.";
  }

  document.getElementById("result").innerHTML = `계산 결과: ${result}`;
}
