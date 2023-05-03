import { isValid, maskify } from './validator.js';

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

const flagCodes = {
    //lista de códigos das bandeiras utilizada parta trocar a bandeira do cartão quando o usuário digita
    visa: [41, 42, 43, 44, 45, 46, 47, 48, 49],
    master1: [51, 52, 53, 54, 55],
    master2: [22, 23, 24, 25, 26, 27],
    elo: [40, 50, 65],
    american: [34, 37],
    Hipercard: [38, 60]
};

myInput.addEventListener("input", function (event) {
    //Parte do código que mascara os digitos que o usuario coloca no input
    let lastNumbers = maskify(this);
    teste += lastNumbers;
});


myInput.addEventListener("keydown", function (event) {
    //keydown serve para guardar o valor quando o enter for apertado.
    console.log('este é o teste com type ' + typeof teste);
    let firstNumbers = teste.slice(0, 2);
    let intNumber = parseInt(firstNumbers); // => precisei passar para inteiro por meio de outra variável. Ainda nãaei o porque que não funcionou usando parse direto no if.
    if (event.keyCode === 13) {
        //Se apertar a tecla enter
        if (!teste || /[^0-9*]+/.test(teste)) {
            //Verifica se foi digitado apenas números e retorna pedindo para reescrever se houver algo diferernte de "0123456789".
            alert('Digite apenas numeros');
        } else {
            for (let chave in flagCodes) {
                if (continuar) {
                    for (let iten in flagCodes[chave]) {
                        if (intNumber === flagCodes[chave][iten]) {
                            cardNameFlag = chave;                                   //console.log("achei " + chave);                       
                            continuar = false;                                      //console.log("achei agora " + cardNameFlag);
                            if (cardNameFlag === "visa") {                          //console.log("esse deveria ser o " + firstNumbers);                              
                                //console.log("card visa")                          //console.log(typeof cardNameFlag)
                                visa.style.display = "inline";
                                master.style.display = "none";
                                elo.style.display = "none";
                                american.style.display = "none";
                                hipercard.style.display = "none";

                            } else if (cardNameFlag === "master1" || cardNameFlag === "master2") {
                                //console.log("card master")
                                visa.style.display = "none";
                                master.style.display = "inline";
                                elo.style.display = "none";
                                american.style.display = "none";
                                hipercard.style.display = "none";

                            } else if (cardNameFlag === "elo") {
                                //console.log("card elo")
                                visa.style.display = "none";
                                master.style.display = "none";
                                elo.style.display = "inline";
                                american.style.display = "none";
                                hipercard.style.display = "none";

                            } else if (cardNameFlag === "american") {
                                //console.log("card ame")
                                visa.style.display = "none";
                                master.style.display = "none";
                                elo.style.display = "none";
                                american.style.display = "inline";
                                hipercard.style.display = "none";

                            } else if (cardNameFlag === "hipercard") {
                                //console.log("card hiper")
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
            const valid = isValid(teste);
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
