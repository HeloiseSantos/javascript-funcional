function logParams(a, b, c) {
    console.log(a, b, c);
}
logParams(1, 2, 3);

function defaultParams(a = 1, b = 2, c = 3) {
    console.log(a, b, c);
}
defaultParams();

// Função que recebe como argumento um array
function logNums(nums) {
    for(let n of nums) {
        console.log(n);
    }
}
logNums([1, 2, 3, 4, 5]);

// Operador spread/rest - Quando você coloca os três pontinhos, indica que você pode receber uma quantidade variável de parâmetros e todos os parâmetros são armazenados dentro de uma função
function logNums(...nums) {
    console.log(nums); // Verifica se o parâmetro que está sendo recebido é um array. Nesse caso é.
}
logNums(1, 2, 3, 4, 5);

// Soma de todos os números
function sumAll(...nums) {
    let total = 0;

    for(let n of nums) {
        total += n;
    }

    return total;
}
console.log(sumAll(1, 2, 3, 4, 5));