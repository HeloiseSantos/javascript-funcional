/* Como passar uma função como prâmetro para outra função */

function bomDia() { // Function declaration
    console.log('Bom dia!');
}

const boaTarde = function () { // Function expression
    console.log('Boa tarde!');
}

function performAnything(fn) {
    // Verificando se o tipo é realmente uma função para que não importe o que for passado como parâmetro, sempre serão executadas apenas as funções
    if(typeof fn === 'function') { 
        fn();
    }
}

performAnything(3); // Não será executado, pois na verificação mostrará que 3 não é uma função
// As função bomDia e boaTarde podem tanto ser chamadas direto, como serem passadas como parâmetro para serem executadas
performAnything(bomDia);
performAnything(boaTarde);


/* Retornar uma função a partir de outra função */

// Função que recebe 2 parâmetros e retorna um valor, que é o resultado do cálculo da potência
function potencia(base, exp) {
    return Math.pow(base, exp);
}

const bits8 = potencia(2, 8);
console.log(bits8);

// Função que recebe 2 parâmetros e retorna outra função que de fato irá fazer o cálculo
function potencia2(base) {
    return function(exp) {
        return Math.pow(base, exp);
    }
}

const potenciaDe2 = potencia2(2);
console.log(potenciaDe2(8));
// Ou
const resultadoPot = potencia2(2)(8);
console.log(resultadoPot);
