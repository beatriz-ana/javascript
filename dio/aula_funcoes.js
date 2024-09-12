
function testeNome(name){
    console.log('Seu nome: ' + name);
}

testeNome('Ana');

function quadrado(valor){
    return valor*valor;
}

//const quadradoValor = quadrado(2);
//console.log(quadradoValor);
console.log(quadrado(2) + quadrado(2));

function incrementarJuros(valor, percentual){
    const valorAcrescimo = (percentual/100) * valor;
    return valor + valorAcrescimo;
}

console.log(incrementarJuros(100,10)+' Valor/Percentual');


//forma de organizar os codigos é com a função Main

