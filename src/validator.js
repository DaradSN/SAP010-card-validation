export function isValid(valueInput) {

  let soma = 0;
  let digitosPares = false;
  for (let i = valueInput.length - 1; i >= 0; i--) {
    let digito = parseInt(valueInput.charAt(i));
    if (digitosPares) {
      digito *= 2;
      if (digito > 9) {
        digito -= 9;
      }
    }
    soma += digito;
    digitosPares = !digitosPares;
  }
  // Verifica se o resultado é divisível por 10.
  return soma % 10 == 0;
}

/*
export function maskify(Input) {
  let security = "";
  let minhaLista = [];
  let valueInput = "";
  let lastNumbers = "";
  Input.addEventListener("input", function (event) {
    security = this.value.replace(/\s/g, ""); // remove espaços em branco
    minhaLista.push(security);
    for (let i = 0; i < minhaLista.length; i++) {
      const ultimoNumero = minhaLista[i].toString().slice(-1);
      valueInput += ultimoNumero;
    }
    const lastFourDigits = security.slice(-4); // pega os últimos quatro dígitos
    const maskedDigits = security.slice(0, -4).replace(/\d/g, "*"); // substitui os demais dígitos por "*"
    const maskedNumber = maskedDigits + lastFourDigits;
    this.value = maskedNumber;
    lastNumbers = valueInput.toString().slice(-16);
    return parseInt(lastNumbers);
  });
}
*/

export function maskify(input) {
  let security = "";
  let minhaLista = [];
  let valueInput = "";
  let lastNumbers = "";
  security = input.value.replace(/\s/g, ""); // remove espaços em branco
    minhaLista.push(security);
    for (let i = 0; i < minhaLista.length; i++) {
      const ultimoNumero = minhaLista[i].toString().slice(-1);
      valueInput += ultimoNumero;
    }
    const lastFourDigits = security.slice(-4); // pega os últimos quatro dígitos
    const maskedDigits = security.slice(0, -4).replace(/\d/g, "#"); // substitui os demais dígitos por "*"
    const maskedNumber = maskedDigits + lastFourDigits;
    input.value = maskedNumber;
    lastNumbers = valueInput.toString().slice(-16);
    return parseInt(lastNumbers);
}