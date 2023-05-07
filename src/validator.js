const validator = {

  isValid: function (valueInput) {
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
    return soma % 10 === 0; // Verifica se o resultado é divisível por 10.
  },
  maskify2: function (parametro) {
    const security = parametro.value;
    const lastFourDigits = security.slice(-4); // pega os últimos quatro dígitos
    const maskedDigits = security.slice(0, -4).replace(/[A-Za-z0-9]/g, "#"); // substitui os demais dígitos por "#"
    const maskedNumber = maskedDigits + lastFourDigits;
    parametro.value = maskedNumber;
    return maskedNumber;
  },
  maskify: function (masked) {
    const security = masked;
    const lastFourDigits = security.slice(-4);
    const maskedDigits = security.slice(0, -4).replace(/[A-Za-z0-9]/g, "#");
    const maskedNumber = maskedDigits + lastFourDigits;
    masked = maskedNumber;
    return maskedNumber;
  }
}
export default validator;

