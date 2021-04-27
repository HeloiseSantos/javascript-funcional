/* Usaremos o callback para ler um arquivo e, quando esse arquivo for lido (quando acontecer um evento), uma função será chamada, de forma assíncrona */

// Usaremos duas bibliotecas do node, chamadas fileSystem (fs) e path
const fs = require('fs');
const path = require('path');

// Criaremos um arquivo chamado 'dados.txt' e definir um caminho para o nosso arquivo dentro de um path só.
const caminho = path.join(__dirname, 'dados.txt'); // __dirname pega o diretório atual que estou rodando o projeto para encontrar o caminho do arquivo que quero ler

function exibirConteudo(_, conteudo) { // Quando não é utilizado um dos parâmetros, pode-se substituir o mesmo por um _
    console.log(conteudo.toString());
}

fs.readFile(caminho, {}, exibirConteudo)

// Também podemos ler um arquivo da seguinte forma:
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()));