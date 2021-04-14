// Entendendo a anatomia de uma função

// FUNCTION DECLARATION

// Esta função não recebe nenhum parâmetro de entrada e não retorna nada
function sayHello() {
    console.log("Hello!");
}
sayHello(); // Chamada da função para executá-la

// Esta função recebe parâmetro e não retorna nada
function sayHelloTo(name) {
    console.log("Hello, " + name + "!");
}
sayHelloTo("Helô");

// Executando a mesma função acima interpolândo o parâmetro dentro de uma template string
function sayHelloTo(name) {
    console.log(`Hello, ${name}!`);
}
sayHelloTo("Helô");

// Esta função não recebe parâmetros, porém retorna algo
function returnHi() {
    return "Hi!";
}
let greeting = returnHi();
console.log(greeting); // Pode ser executado desta forma
console.log(returnHi()); // Ou desta

// Esta função recebe um parâmetro e retorna algo
function returnHiTo(name) {
    return `Hi, ${name}!`;
}
console.log(returnHiTo("John"));