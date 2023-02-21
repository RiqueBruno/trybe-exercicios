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