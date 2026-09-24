/*No javascript (e em outras linguagens de programação) dados podem ser representados em diferentes formas*/

// TIPOS PRIMITIVOS:
// Number
// BigInt
// String
// Boolean
// Null
// Undefined

// TIPOS NÃO PRIMITIVOS:
// Objetos
// Funções

// Number -> utilizado para representar números.
let idade = 22;
let altura = 1.75;

console.log(idade);
console.log(altura);

// Também é possivel fazer operações
let numero01 = 4;
let numero02 = 6;

console.log(numero01 + numero02);
console.log(numero01 - numero02);

// Podemos verficar o tipo também: Isso serve para todos os tipos de dados.
console.log(typeof(idade));

// BigInt -> utilizado para representar números inteiros muito grandes, maiores do que os números inteiros que podem ser representados com segurança pelo Number.
let numeroGrande = 9007199254740991n;

console.log(numeroGrande);
console.log(typeof numeroGrande);

// String -> representa textos.
let nome = "André";
let cidade = "Natal/RN";

console.log(nome);
console.log(cidade);
// Podemos usar "", '' ou ` ` -> As três formas representam uma String. Além disso Strings podem ser tratadas como uma lista de caracteres -> let nome = "andré"; cada caractere possui uma posição.
// A N D R E
// 0 1 2 3 4

console.log(nome[0]);
// A
console.log(nome[1]);
// N

// Também podemos descobrir o tamanho da string
console.log(nome.length);

// Boolean -> representa um valor lógico TRUE ou FALSE.

let maiorIdade = true;
let possuiCNH = false;

console.log(maiorIdade);
console.log(possuiCNH);

// Boolean aparece muito quando começamos a trabalhar com condições:
/* let idade = 20;

let maiorDeIdade = idade >= 18;

console.log(maiorDeIdade);
TRUE
*/

// Null -> representa a ausência intencional de um valor.
let telefone = null;

console.log(telefone);
console.log(typeof(telefone));

// Underfined -> significa que uma variável foi declarada, mas ainda não recebeu um valor.

let user;
console.log(user);