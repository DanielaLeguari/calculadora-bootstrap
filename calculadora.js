function validaOperacao(numero1, numero2, operacao) {
  if (operacao == "+") {
    return numero1 + numero2;
  } else if (operacao == "-") {
    return numero1 - numero2;
  } else if (operacao == "*") {
    return numero1 * numero2;
  } else if (operacao == "/") {
    return numero1 / numero2;
  } else {
    return `'${operacao}' operação inválida!`;
  }
}

function validaNaN(numero1, numero2) {
  if (isNaN(numero1) || isNaN(numero2)) {
    return true;
  } else {
    return false;
  }
}

function converteNumero(numero1, numero2, operacao) {
  if (validaNaN(numero1, numero2) == true) {
    return `O valor digitado não é um número`;
  } else {
    return calculaOperacao(Number(numero1), Number(numero2), operacao);
  }
}

function calculaOperacao(numero1, numero2, operacao) {
  if ((numero1 > 0 && numero1 <= 10) || (numero1 >= 20 && numero1 <= 30)) {
    if ((numero2 > 0 && numero2 <= 10) || (numero2 >= 20 && numero2 <= 30)) {
      return validaOperacao(numero1, numero2, operacao);
    }
  }
  return `Você digitou números fora do intervalo!`;
}

function funcaoPrincipalDocument() {
  let numero1 = document.getElementById("inputNumero1").value;
  let numero2 = document.getElementById("inputNumero2").value;
  let operacao = document.getElementById("operacao").value;

  let resultado = converteNumero(numero1, numero2, operacao);

  document.getElementById("inputResultado").value = resultado;
}
function funcaoPrincipalJQuery() {
  let numero1 = $("#inputNumero1").val();
  let numero2 = $("#inputNumero2").val();
  let operacao = $("#operacao").val();

  let resultado = converteNumero(numero1, numero2, operacao);

  $("#inputResultado").val(resultado);

  // ordem das funções:
  // 1ª letra
  // 2ª numero
  // 3ª intervalo
  // 4ª calculo
}

//console.log(calculaOperacao(1, "31", "+"));
