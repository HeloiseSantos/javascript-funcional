// Entendendo a anatomia de uma função

// Voltando a ideia da função anônima é possível imprimir o resultado da função dentro dela mesma. É possível também imprimir interpolando o valor dos parâmetros

(function (a, b, c) {
    console.log(a + b + c);
});

(function (a, b, c) {
    console.log(`Result: ${a + b + c}`);
});

// Nesse caso, não tenho como chamar a função, pois ela é uma função anônima (sem nome para ser chamada), portanto não conseguimos imprimir o resultado. Para isso, existe o seguinte conceito:

// IIFE - Immediately Invoked Function Expression (Function expression imediatamente invocada)
// Neste caso, podem ser passados os parâmetros logo na sequência da função, desta forma:

(function (d, e, f) {
    console.log(`Result: ${d + e + f}`)
})(1, 2, 3);

// É possível criar funções deste tipo como uma arrow function

(() => {
    console.log("arrow #01");
})();

(() => console.log("Arrow #02"))();