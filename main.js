document.getElementById("btn-basica").onclick = function () {
  const a = Number(document.getElementById("num1").value);
  const b = Number(document.getElementById("num2").value);
  const op = document.getElementById("operacao").value;
  let r = 0;

  if (op === "+") {
    r = a + b;
  } else if (op === "-") {
    r = a - b;
  } else if (op === "*") {
    r = a * b;
  } else if (op === "/") {
    if (b === 0) {
      document.getElementById("resultado-basica").textContent = "Não dá para dividir por zero";
      return;
    }
    r = a / b;
  }

  document.getElementById("resultado-basica").textContent = "Resultado: " + r;
};

document.getElementById("btn-porcentagem").onclick = function () {
  const total = Number(document.getElementById("valor").value);
  const pct = Number(document.getElementById("percentual").value);
  const r = (total * pct) / 100;
  document.getElementById("resultado-porcentagem").textContent = "Resultado: " + r;
};