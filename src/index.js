/*import validator from './validator.js';

console.log(validator);*/

const myInput = document.getElementById("numero");
let valueInput = "";
let security = "";
let minhaLista = [];
let lastNumbers = "";
//tive que criar uma nova variavel para não atraplahar a função luhn check.

myInput.addEventListener("input", function(event) {
  security = this.value.replace(/\s/g, ''); // remove espaços em branco
  minhaLista.push(security);
  for (let i = 0; i < minhaLista.length; i++){
    const ultimoNumero = minhaLista[i].toString().slice(-1);
    valueInput += ultimoNumero;
  }
  const lastFourDigits = security.slice(-4); // pega os últimos quatro dígitos
  const maskedDigits = security.slice(0, -4).replace(/\d/g, "*"); // substitui os demais dígitos por "*"
  const maskedNumber = maskedDigits + lastFourDigits;
  this.value = maskedNumber;
  lastNumbers = valueInput.toString().slice(-16);
});

//keydown serve para guardar o valor quando o enter for apertado.
myInput.addEventListener("keydown", function(event){
    if(event.keyCode === 13) {
        if(!security || /[^0-9*]+/.test(security)) {
            alert('Digite apenas numeros');
        } else { 
            const isValid = luhnCheck(lastNumbers);
            if (isValid) {
                alert('numero de cartão válido');
            } else {
                alert('Numero de cartão inválido');
            }
         }   
    }
});

 // Aplicar o algoritmo de Luhn
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