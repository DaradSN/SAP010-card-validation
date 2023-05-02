import luhnCheck from './validator.js';

const myInput = document.getElementById("numero");
let valueInput = "";
let security = "";
let minhaLista = [];
let lastNumbers = "";
let firstNumbers = "";
let visa = document.getElementById("visa");
let master = document.getElementById("master");
let elo = document.getElementById("elo");
let american = document.getElementById("american");
let hypercard = document.getElementById("hypercard");

myInput.addEventListener("input", function (event) {
    security = this.value.replace(/\s/g, ''); // remove espaços em branco
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
    
});

const flagCodes = {
    visa: [41, 42, 43, 44, 45, 46, 47, 48, 49],
    master1: [51, 52, 53, 54, 55],
    master2: [22, 23, 24, 25, 26, 27],
    elo:[40, 50, 65],
    american: [34, 37],
    Hipercard: [38, 60]
};

let continuar = true;
let cardNameFlag;

//keydown serve para guardar o valor quando o enter for apertado.
myInput.addEventListener("keydown", function (event) {
    let firstNumbers = lastNumbers.slice(0, 2);
    if (event.keyCode === 13) {
        if (!security || /[^0-9*]+/.test(security)) {
            alert('Digite apenas numeros');
        } else {
            for (let chave in flagCodes){
                if (continuar){
                    for (let iten in flagCodes[chave]){
                    console.log(typeof flagCodes[chave][iten], flagCodes[chave][iten])
                    console.log(typeof firstNumbers, firstNumbers)
                    if(parseInt(firstNumbers) === flagCodes[chave][iten]){
                        cardNameFlag = chave;
                        console.log("achei " + chave);
                        console.log("achei agora " + cardNameFlag);
                        console.log("esse deveria ser o " + firstNumbers);
                        continuar = false;
                        break;
                        }
                    }
                }	
            }
            alert(firstNumbers);
            alert(cardNameFlag);
            const isValid = luhnCheck(lastNumbers);
            if (isValid) {
                alert('numero de cartão válido');
            } else {
                alert('Numero de cartão inválido');
            }
        }
    }
});


if (cardNameFlag === "visa"){
    visa.style.display = "inline";
    master.style.display = "none";
    elo.style.display = "none";
    american.style.display = "none";
    hypercard.style.display = "none";

} else if (cardNameFlag === "master1" ||  cardNameFlag === "master2"){
    visa.style.display = "none";
    master.style.display = "inline";
    elo.style.display = "none";
    american.style.display = "none";
    hypercard.style.display = "none";

} else if (cardNameFlag === "elo"){
    visa.style.display = "none";
    master.style.display = "none";
    elo.style.display = "inline";
    american.style.display = "none";
    hypercard.style.display = "none";

}else if (cardNameFlag === "american"){
    visa.style.display = "none";
    master.style.display = "none";
    elo.style.display = "none";
    american.style.display = "inline";
    hypercard.style.display = "none";

}else if (cardNameFlag === "hypercard"){
    visa.style.display = "none";
    master.style.display = "none";
    elo.style.display = "none";
    american.style.display = "none";
    hypercard.style.display = "inline";
}
