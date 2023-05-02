function luhnCheck(valueInput) {

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
// ...


export default luhnCheck;
