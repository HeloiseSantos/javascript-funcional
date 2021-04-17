/* Utilizando as funções map, filter e reduce em um único exemplo. Neste exemplo, iremos calcular a média dos alunos com nota maior ou igual a 9. */

const students = [
    {name: "Jake", score: 6.4},
    {name: "Susan", score: 8.6},
    {name: "Emma", score: 9.4},
    {name: "Peter", score: 9.1}
]

const greatStudent = student => student.score >= 9;
const getScore = el => el.score;
const avg = (acumulador, el, i, array) => {
    if(i !== array.length - 1) {
        return acumulador + el;
    } else {
        return (acumulador + el) / array.length;
    }
} 

console.log(
    students
        .filter(greatStudent)
        .map(getScore)
        .reduce(avg)
)