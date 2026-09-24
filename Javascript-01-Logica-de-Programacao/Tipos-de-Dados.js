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

// Podemos verficar o tipo também:
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
console.log(typeof(nome));
// Podemos usar "", '' ou ` ` -> As três formas representam uma String. Além disso Strings podem ser tratadas como uma lista de caracteres -> let nome = "andré"; cada caractere possui uma posição.
// A N D R E
// 0 1 2 3 4

console.log(nome[0]);
// A
console.log(nome[1]);
// N

// Também podemos descobrir o tamanho da string
console.log(nome.length);


// Boolean ->

