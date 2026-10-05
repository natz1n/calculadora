const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operacao = document.getElementById("operacao");
const btnBasica = document.getElementById("btn-basica");
const resultadoBasica = document.getElementById("resultado-basica");

const valor = document.getElementById("valor");
const percentual = document.getElementById("percentual");
const btnPorcentagem = document.getElementById("btn-porcentagem");
const resultadoPorcentagem = document.getElementById("resultado-porcentagem");

btnBasica.addEventListener("click", function () {
  if (num1.value === "" || num2.value === "") {
    resultadoBasica.textContent = "Preencha os dois números.";
    return;
  }

  const a = Number(num1.value);
  const b = Number(num2.value);
  let resultado;

  if (operacao.value === "+") {
    resultado = a + b;
  } else if (operacao.value === "-") {
    resultado = a - b;
  } else if (operacao.value === "*") {
    resultado = a * b;
  } else if (operacao.value === "/") {
    if (b === 0) {
      resultadoBasica.textContent = "Não dá para dividir por zero.";
      return;
    }
    resultado = a / b;
  }

  resultadoBasica.textContent = "Resultado: " + resultado;
});

btnPorcentagem.addEventListener("click", function () {
  if (valor.value === "" || percentual.value === "") {
    resultadoPorcentagem.textContent = "Preencha o valor e a porcentagem.";
    return;
  }

  const total = Number(valor.value);
  const pct = Number(percentual.value);
  const resultado = (total * pct) / 100;

  resultadoPorcentagem.textContent = "Resultado: " + resultado;
});