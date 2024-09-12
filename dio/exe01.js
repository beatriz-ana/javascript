
let nota1= 8;
let nota2= 8;
let nota3= 8;

const media = (nota1 + nota2 + nota3) / 3
console.log(media);

if(media > 7){
    console.log('Aprovado!');
}else if(media >= 5 || media <= 7){
    console.log('Em recuperação!');
}else{
    console.log('Reprovado!');
}
