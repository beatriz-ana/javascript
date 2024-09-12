console.log("ola");

//let variavel = 10;

//const pi = 3.14;

//console.log(variavel);

//caucular o valor de uma viagem

const precoComb = 5.60;
const kmPorLitros = 10;
const distancia = 589;

const litrosConsumdos = distancia/kmPorLitros;
const valorViagem = precoComb*litrosConsumdos;

console.log("O valor total deu uma viagem de "+distancia + "Km é R$"+ valorViagem.toFixed(2))