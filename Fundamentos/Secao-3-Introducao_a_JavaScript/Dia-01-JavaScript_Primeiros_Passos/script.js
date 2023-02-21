const a = 50;
const b = 35;
const c = 10;
const d = 15;
let resultado;

//Adição
resultado = a + b;
console.log(resultado);

//Subtração
resultado = a - b;
console.log(resultado);

//Multiplicação
resultado = a * b;
console.log(resultado);

//Divisão
resultado = a / b;
console.log(resultado);

//Módulo
resultado = a % b;
console.log(resultado);

//Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.

if (a > b){
    console.log("A maior que B.");
}else if(b > a){
    console.log("B maior que A.");
}else{
    console.log("Os valores são iguais!");
}

//Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.

if(a > b && a > c){
    console.log("A é o maior.");
} else if(b > a && b > c){
    console.log("B é o maior.");
}else{
    console.log("C é o maior.");
}

//Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
resultado = a
if(resultado > 0){
    console.log("Positive");
}else if(resultado < 0){
    console.log("Negative");
}else{
    console.log("Zero");
}

//Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

let somaAngulos = a + b + c;
let verifyAngles = a > 0 && b >0 && c > 0;

if (verifyAngles) {
    if (somaAngulos === 180) {
        console.log(true);
    }else{
        console.log(false);
    }
}else{
    console.log("Angulo inválido!");
}

for(let index = 0; index < 10; index+=1 ){
    console.log(index);
  }

  for(let index = 0; index <= 20; index+=1 ){
    console.log(index);
  }
  
  //----------------------------------------------------
  // 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

// let Players01 = 0;
// let Players02 = 0;
// let sorteio = Math.floor(Math.random(1, 2, 3) * 3) + 1;
// // 1 = Pedra 2 = Papel 3 = Tesoura

// Players01 = Math.floor(Math.random(1, 2, 3) * 3) + 1;
// Players02 = Math.floor(Math.random(1, 2, 3) * 3) + 1;
// console.log(Players01);
// console.log(Players02);

// if (Players01 === 1 && Players02 === 2) {
    
// }

//Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

const tipo = 'peao';
switch (tipo.toLowerCase()) {
    case 'peao':
        console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
        break;

    case 'cavalo':
        console.log('Cavalo -> "L" pode pular sobre as peças.');
        break;    

    default:
        console.log('Erro, peça inválida!');
        break;
}

// Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. 
function porcentagemNota(nota) {
    if (nota >= 90 && nota <= 100) {
        console.log('Sua nota é: A.');
    } else if (nota >= 80 && nota <= 89) {
        console.log('Sua nota é: B.');
    } else if (nota >= 70 && nota <= 79) {
        console.log('Sua nota é: C.');
    } else if (nota >= 60 && nota <= 69) {
        console.log('Sua nota é: D.');
    } else if (nota >= 50 && nota <= 59) {
        console.log('Sua nota é: E.');
    } else if (nota > 0 && nota < 50) {
        console.log('Sua nota é: F.');
    } else if (nota < 0 || nota > 100) {
        console.log('Erro.');
    }
}
porcentagemNota(102);

// Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.
function imparPar(a, e, i) {    
    let imparParIs = false;
    
    if ((a % 2 === 0 || e % 2 === 0 || i % 2 === 0)) {
        imparParIs = true;
    };
    console.log(imparParIs);
}
imparPar(1, 5, 3);