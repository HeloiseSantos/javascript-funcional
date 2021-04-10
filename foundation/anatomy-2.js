// Entendendo a anatomia de uma função

// ANONYMOUS FUNCTION

// Função anônima é um tipo de função que não recebe nome, porém é usada a palavra reservada function. É preciso definir os parâmetros que serão passados, que serão quantos queremos. Para não gerar erro no código, podemos colocar a função entre parênteses. Em function expressions utilizamos funções anônimas
(function (a, b, c) {
    return a + b + c;
})

// FUNCTION EXPRESSION

// Quando criamos uma variável e atribuímos a ela uma função, chama-se function expression
const sum = function (a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(result);

// Se criarmos uma nova constante onde atribuímos a ela a função acima, a nova constante apontará para a mesma função que a utilizada anteriormente
const anotherSum = sum;
console.log(anotherSum(5 ,9));