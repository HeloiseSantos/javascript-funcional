/* Quando a linguagem permite que uma função opere usando outras funções.
Exemplo: posso passar uma função como argumento para outras funções, assim como posso retornar uma funçãoa partir de outra função */

// Recebendo uma função como parâmetro para outra função
function run(fn) {
    fn();
}

function sayHello() {
    console.log("Hello!");
}

run(sayHello); // Passando a função como parâmetro (referência) sem invocá-la, pois ela não retorna nada.

// Outra possibilidade - função anônima
run(function() {
    console.log("Run!");
})