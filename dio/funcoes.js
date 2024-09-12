/*function parImpar(num){
    if(num%2===0){
        return 'par';
    }else{
        return 'impar';
    }
}

let res = parImpar(11);

console.log(res);*/

function calcularImc(peso,altura){
    return peso / Math.pow(altura,2);
}

function classificarImc(imc){
    if(imc <18.5){
        return console.log('Abaixo do peso!');
    }else if(imc <25){
        return console.log('Peso normal!');
    }else if(imc<30){
        return console.log('Acima do peso!');
    }else if(imc<40){
        return console.log('Obeso!');
    }else{
        return console.log('Obesidade grave!');
    }
}

function main(){
    const peso = 42;
    const altura = 1.50;

    let imc = calcularImc(peso,altura); 

    console.log(classificarImc(imc));
}

main();

//Main
(function (){
    const peso = 42;
    const altura = 1.50;

    let imc = calcularImc(peso,altura); 

    console.log(classificarImc(imc));
})();