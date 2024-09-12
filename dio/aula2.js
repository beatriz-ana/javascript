/*const numero = 'i';

const par = (numero%2) === 0;

if(par){
    console.log('É par!');
}else if(!par){
    console.log('É ímpar!');
} 


console.log(par);*/

const precoEtanol = 5.50;
const precoGasolina = 6.50;
const tipoComb = 'Gasolina a';

const kmPorLitros = 10;
const distancia = 100;

const litrosConsumidos = distancia/kmPorLitros;

let valorViagem = 0;

if(tipoComb === 'Etanol'){
    valorViagem= precoEtanol*litrosConsumidos;
    console.log("O valor total deu uma viagem de "+distancia + "Km é R$"+ valorViagem.toFixed(2))
}else{
    valorViagem= precoGasolina*litrosConsumidos;
    console.log("O valor total deu uma viagem de "+distancia + "Km é R$"+ valorViagem.toFixed(2))
}




