const validator = {

  isValid: function(valueInput) {
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
    return soma % 10 === 0;
  },
  maskify2: function(input) {
    const security = input.value; 
    //console.log("este é o secutiry do maskify " + security);
    const lastFourDigits = security.slice(-4); // pega os últimos quatro dígitos
    //console.log("este é o lastFourDigits do maskify " + lastFourDigits);
    const maskedDigits = security.slice(0, -4).replace(/[A-Za-z0-9]/g, "#"); // substitui os demais dígitos por "#"
    //console.log("este é o maskedDigits do maskify " + maskedDigits);
    const maskedNumber = maskedDigits + lastFourDigits;
    //console.log("este é o maskedNumber do maskify " + maskedNumber);
    input.value = maskedNumber;
    const test = input.value;
    return test;
  },

  maskify: function(input) {
    
  }

}
 
export default validator;

