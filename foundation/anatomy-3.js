// Entendendo a anatomia de uma função

// ARROW FUNCTION

// Começamos criando uma função anônima
const increment1 = function(n) {
    return n + 1;
}
console.log(increment1(1));

// Transformando a função acima em uma arrow function...
// Removemos a palavra function, inserimos o => (essa seta indica que estamos utilizando uma arrow function)
// Arrow function sempre é uma função anônima
const increment2 = (n) => {
    return n + 1;
}
console.log(increment2(5));

// Simplificação que é possível ser feita quando temos apenas um único parâmetro na função
const increment3 = n => {
    return n + 1;
}
console.log(increment3(24));

// Podemos simplificar ainda mais.
// Podemos remover o par de chaves, porém irá começar a dar erro no return. Quando temos uma arrow function que não tem um par de chaves, significa que ela terá apenas uma única linha de código e tudo que estiver nesta linha de código será retornado automaticamente, ou seja, a palavra "return" está implícita e não pode ser escrita no código de forma explícita se não houver um par de chaves. Apenas quando se tem um par de chaves, caso queiramos que a função retorne algo, somos obrigamos a usar o return
const increment4 = n => n + 1;
console.log(increment4(199));

// Caso eu tenha uma função que receba 2 parâmetros, é obrigatório incluir um par de parênteses e automaticamente irá retornar o valor de a + b.
const sum = (a, b) => a + b;
console.log(sum(2 , 3));