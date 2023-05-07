import validator from './validator.js';

const myInput = document.getElementById("numero");
const card = document.getElementById("cartão");
const message = document.getElementById("message");
const btnReload = document.getElementById('btnReload');
const visa = document.getElementById("visa");
const master = document.getElementById("master");
const elo = document.getElementById("elo");
const american = document.getElementById("american");
const hipercard = document.getElementById("hipercard");

let teste = "";
let continuar = true;
let cardNameFlag = "";
let valueInput = "";
const myList = [];

const flagCodes = {   //lista de códigos das bandeiras utilizada para trocar a bandeira do cartão quando o usuário digita
  visa: [41, 42, 43, 44, 45, 46, 47, 48, 49],
  master1: [51, 52, 53, 54, 55],
  master2: [22, 23, 24, 25, 26, 27],
  elo: [40, 50, 65],
  american: [34, 37],
  Hipercard: [38, 60]
};

myInput.addEventListener("input", function () {   //Parte do código que mascara os digitos que o usuario coloca no input 
 
  const lastNumbers = validator.maskify2(this);
  myList.push(lastNumbers);
  for (let i = 0; i < myList.length; i++) {
    const ultimoNumero = myList[i].toString().slice(-1);
    valueInput += ultimoNumero;
  }
  teste = valueInput.toString().slice(-myList.length);
});

myInput.addEventListener("keydown", function (event) {
  const firstNumbers = teste.slice(0, 2);
  const intNumber = parseInt(firstNumbers);   // => precisei passar para inteiro por meio de outra variável. 
  if (event.keyCode === 13) { 
    if (!teste || /[^0-9*]+/.test(teste)) {   //Verifica se foi digitado apenas números e retorna pedindo para reescrever se houver algo diferernte de "0123456789".
      alert('Digite apenas numeros');
    } else {
      for (const chave in flagCodes) {
        if (continuar) {
          for (const iten in flagCodes[chave]) {
            if (intNumber === flagCodes[chave][iten]) {
              cardNameFlag = chave;                                   //console.log("achei " + chave);                       
              continuar = false;                                      //console.log("achei agora " + cardNameFlag);
              if (cardNameFlag === "visa") {                          //console.log("esse deveria ser o " + firstNumbers);                              
                visa.style.display = "inline";
                master.style.display = "none";
                elo.style.display = "none";
                american.style.display = "none";
                hipercard.style.display = "none";

              }else if (cardNameFlag === "master1" || cardNameFlag === "master2") {
                visa.style.display = "none";
                master.style.display = "inline";
                elo.style.display = "none";
                american.style.display = "none";
                hipercard.style.display = "none";

              } else if (cardNameFlag === "elo") {
                visa.style.display = "none";
                master.style.display = "none";
                elo.style.display = "inline";
                american.style.display = "none";
                hipercard.style.display = "none";

              } else if (cardNameFlag === "american") {
                visa.style.display = "none";
                master.style.display = "none";
                elo.style.display = "none";
                american.style.display = "inline";
                hipercard.style.display = "none";

              } else if (cardNameFlag === "hipercard") {
                visa.style.display = "none";
                master.style.display = "none";
                elo.style.display = "none";
                american.style.display = "none";
                hipercard.style.display = "inline";
              }

              break;

            }
          }
        }
      }
      const valid = validator.isValid(teste);
      if (valid) {
        card.style.backgroundColor = "#90EE90"
        message.innerHTML = "CARTÃO VÁLIDO"
        myInput.disabled = true;

      } else {
        card.style.backgroundColor = "#FF6347"
        message.innerHTML = "CARTÃO INVÁLIDO"
        myInput.disabled = true;
      }
    }
  }
});

btnReload.addEventListener('click', function () {
  location.reload();
});
