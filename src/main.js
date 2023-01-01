let binary = document.getElementById("binary");
let decimal = document.getElementById("decimal");

const form = document.querySelectorAll("form");
const btnConvert = document.querySelector("#btnConvert");
const btnClean = document.querySelector("#btnClean");
const notification = document.querySelector("#notification");

// Limita a somente caracteres binarios, caso seja digitados
// Caracteres que não são Binarios (0 e 1) o usuário é alertado.
function limitCharToBinary(e) {
  const keyCode = e.keyCode ? e.keyCode : e.wich;

  if (keyCode !== 48 && keyCode !== 49) {
    e.preventDefault();
    notification.setAttribute(
      "class",
      "h-14 bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-lg text-red-100 font-semibold"
    );
    notification.innerText = "Permitido apenas os numeros 0 e 1!";
  }
}

// Limita o imput do binario e notifica o
// usuário que deve haver 8 Digitos no campo.
function limitCharInInputs() {
  binary.maxLength = 8;
  binary.minLength = 8;

  binary.oninvalid = (e) => {
    e.preventDefault();
    decimal.value = "";
    binary.value = "";

    notification.setAttribute(
      "class",
      "h-14 bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-lg text-red-100 font-semibold"
    );
    notification.innerText = "O fomato do binario deve conter 8 digitos!";
  };
}

// Remove eventos de submit do form
function removeEvents() {
  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  });
}

// Converte binario para decimal
function convertBinForDec() {
  let decimal = parseInt(binary.value, 2);
  document.getElementById("decimal").value = decimal;
}

// Converte binario para decimal
function convertDecForBin() {
  let resBinary = Number(decimal.value).toString(2);
  document.getElementById("binary").value = resBinary;
}

// Inicia funcões de calculos
function startCalc() {
  if (binary.value) {
    convertBinForDec();
  } else if (decimal.value) {
    convertDecForBin();
  }
}

function btnCleanValues() {
  decimal.value = "";
  binary.value = "";

  notification.setAttribute(
    "class",
    "h-14 bg-gradient-to-r from-green-500 to-teal-400 flex items-center justify-center text-lg text-neutral-900 font-semibold"
  );
  notification.innerText = "Conversor de Binario Para Decimal";
}

// Adiciona eventos e fucões a aplicação
btnConvert.addEventListener("click", startCalc);
btnClean.addEventListener("click", btnCleanValues);
binary.addEventListener("keypress", limitCharToBinary);

removeEvents();
limitCharInInputs();
