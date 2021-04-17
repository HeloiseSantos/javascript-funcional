/* A ideia da função filter, é filtrar os elementos. O array resultante poderá ter o mesmo tamanho do array original, poderá ser menor ou até mesmo vazio. Tem quase a mesma ideia do map. Iremos passar uma função como parâmetro para outra função, porém o objetivo da função, é filtrar, portanto sua resposta é sempre verdadeiro ou falso. Se o resultado de cada elemento for verdadeiro, este fará parte do array resultante e caso o resultado for falso, esse elemento não fará parte do array resultante. */

// Exemplos utilizando a função filter

const numbers = [1, 2, 3, 4, 5, 6];

const greaterThanZero = el => el > 0;
const greaterThanTen = el => el > 10;
const even = el => el % 2 === 0;

console.log(numbers.filter(greaterThanZero));
console.log(numbers.filter(greaterThanTen));
console.log(numbers.filter(even));

const students = [
    {name: "Jake", score: 6.4},
    {name: "Susan", score: 8.6},
    {name: "Emma", score: 9.4},
    {name: "Peter", score: 9.1}
]

const greatStudent = student => student.score >= 9;

console.log(students.filter(greatStudent));