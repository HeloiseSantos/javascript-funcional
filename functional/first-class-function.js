/* Diz-se que uma linguagem de programação tem funções de primeira classe quando as funções nessa linguagem são tratadas como qualquer outra variável */

// Usando function expression
const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

//Utilizando arrow function
const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

console.log(add(10, 20));
console.log(subtract(10, 20));
console.log(multiply(10, 20));
console.log(divide(10, 20));