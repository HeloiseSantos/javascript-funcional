/* A ideia do callback é passar uma função como parâmetro para outra função e depois essa função será chamada de volta. Está diretamente associado a: quando acontecer algum evento, uma função é chamada de volta. Exemplo de callback: Quando é realizada uma requisição http, quando vier a resposta, uma callback é chamada. */

function exec(fn, a, b) {
    return fn(a, b);
}

const somarNoTerminal = (x, y) => console.log(x + y);

const subtrairNoTerminal = (w, z) => console.log(w - z);

const multiplicarNoTerminal = (m, n) => m * n;

exec(somarNoTerminal, 56, 38);
exec(subtrairNoTerminal, 182, 27);

const result = exec(multiplicarNoTerminal, 50, 25);
console.log(result);

// Exemplo de quando passamos uma função como parâmetro para outra função e, quando ocorre um evento, essa função é chamada

const callback = () => console.log('Exec...');
setInterval(callback, 1000)

// Ou

setInterval(() => console.log('Exec2...'), 1000);

// Ou

setInterval(function() { 
    console.log('Exec3...')
}, 1000);
