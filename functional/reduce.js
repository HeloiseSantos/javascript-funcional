/* Este tipo de função pode receber mais de um parâmetro. O primeiro parâmetro funciona como um acumulador e o segundo é o elemento atual. Com essa função, também iremos percorrer todo o array e o segundo parâmetro indica os elementos desse array. Podemos iniciar o acumulador estipulando um valor inicial para ele. Caso não seja feita a atribuição de valor inicial, a função reduce utiliza o valor do primeiro elemento para que o acumulador seja iniciado. */

// Exemplo de utilização da função reduce

// Aplicando reduce para somar todos os elementos do array
const numbers = [1, 2, 3, 4, 5, 6];

const sum = (total, el) => total + el;
const total = numbers.reduce(sum, 0); // Passando a função e o valor inicial como parâmetros - Primeiro parâmetro é a função e o segundo é o valor inicial

console.log(total);

// Utilizando o mesmo array acima, iremos calcular a média dos elementos
const avg = (acumulador, el, i, array) => {
    if(i !== array.length - 1) {
        return acumulador + el;
    } else {
        return (acumulador + el) / array.length;
    }
} 

const result = numbers.reduce(avg, 0);

console.log(result);