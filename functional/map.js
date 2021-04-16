/* A função map recebe outra função como parâmetro (conceito de higher-order function).
Sempre que for preciso fazer qualquer tipo de transformação, pode ser usada a função map. Esta função irá operar em cima de um array e o array resultante terá sempre o mesmo tamanho do array inicial. Esta função é responsável por transformar cada um dos elementos do array de acordo com a função criada */

// Aplicando a função map para transformar um array em outro array

// Nesta função, pegaremos cada um dos elementos e transformar em outro elemento do tipo number com o dobro do seu valor
const numbers = [1, 2, 3, 4, 5, 6];

const numbersV2 = numbers.map(el => el * 2) // Utilizando uma arrow function

console.log(numbersV2);

// Nesta função, pegaremos as notas dos alunos e as mostraremos já arredondadas. Neste exemplo, mostra que é possível pegar mais de um map.
const students = [
    {name: "Jake", score: 6.4},
    {name: "Susan", score: 8.6},
    {name: "Emma", score: 9.4},
    {name: "Peter", score: 9.1}
]

const getScore = el => el.score;

console.log(
    students
        .map(getScore)
        .map(Math.ceil) // Arredonda valor para cima - Para arredondar para baixo, no lugar do ceil utilizar o floor
);