console.log("Olá, mundo! Este é um script JavaScript.");

//Declaração de variáveis
var nome = 'João';
let idade = 25;
const PI = 3.1415;

//Tipos Primitivos
let texto = "Olá mundo!";   //String
let numero = 42;    //Number
let booleano = true;    //Boolean
let nulo = null;    //Null (Valor intencionalmente vazio)
let undefined = undefined;  //Undefined (sem valor atribuido)

//Arays e Objetos
let frutas = ["Maçã", "Banana", "Laranja"];  //Array
let pessoa = { nome: "Carlos", idade: 28 }; //Objeto

// Prints de teste
console.log(frutas[0])
console.log(pessoa.nome)

//Condicional if-else
let hora = 14;
if (hora < 12) {
    console.log("Bom dia!");
}
else if (hora < 18) {
    console.log("Bom tarde!");
}
else {
    console.log("Boa noite!");
}

//Switch-case para múltiplas condições
let core = "azul";

switch (cor) {
    case "vermelho":
        console.log("A cor escolhida foi vermelho.");
        break;
    case "azul":
        console.log("A cor escolhida foi azul.");
        break;
    default:
        console.log("Cor não reconhecida...");
        break;
}

//Laços de repetição
//For - executa um bloco de código várias vezes
for (let i = 0; i < array.length; i++) {
    console.log("Número:", i);
}

// While - executa enquanto a condição for verdadeira
let contador = 0;
while (contador < 3) {
    console.log("Número:", contador);
    contador++;
}

//Função tradicional
function saudacao(nome) {
    return "Olá, " + nome + "!";
}
console.log(saudacao("Maria"));

// Arrow Function (função moderna)
const dobro = (num) => num * 2;
console.log(dobro(5)); // Retorna 10

//Escopo de variáveis
let global = "Sou global";
function testarEscopo() {
    let local = "Sou local";
    console.log(global); // Acessa variável global
    console.log(local); // Acessa variável local
}
testarEscopo();

// console.log(local); // Erro! 'local' não está acessível fora da função

// Callback function (introdução)
function processar(callback) {
    console.log("Processando...");
    callback();
}
processar(() => console.log("Finalizado!"));

// Função assíncrona (introdução)
async function pegarDados() {
    return "Dados recebidos!";
}
pegarDados().then(console.log); // Usa .then para lidar com a resposta