let preco = 10;

let condPagamento = 4;

if(condPagamento === 1){
    console.log(' À vista Débito, recebe 10% de desconto');
    preco = preco - (preco * 0.1);
    
}else if(condPagamento === 2){
    console.log(' À vista no Dinheiro ou PIX, recebe 15% de desconto');
    preco = preco - (preco * 0.15);
}else if(condPagamento === 3){
    console.log('Em duas vezes, preço normal de etiqueta sem juros');
}else{
    console.log('Acima de duas vezes, preço normal de etiqueta mais juros de 10%');
    preco = preco + (preco * 0.1);
}

console.log(preco);