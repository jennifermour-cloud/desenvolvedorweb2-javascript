// Array 
const nomes = ["João", "Maria", "José"];

console.log(nomes);
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);
console.log(nomes[3]); // Não existente

// Adicionando um elemento no array
nomes.push("Beatriz");
console.log(nomes);

// Removendo
nomes.pop();
console.log("Beatriz foi renovida " + nomes);

// Alterar 
nomes[0] = "João Pedro";
console.log(nomes);

// Concatenar dois arrays
const numeros = [6, 7, 8];
console.log(numeros.length);

const outrosNumeros = [3, 9, 2];
const juncaoNumeros = numeros.concat(outrosNumeros);
console.log(juncaoNumeros);

// Removendo o primeiro elemento do array
const nomesNovos = ["Joaquina", "Felipe", "Plínio"];

const primeiroNome = nomesNovos.shift();
console.log(nomesNovos);

// Adicionar um ou mais elementos no início do array
const numerosTeste = [1, 2, 3];

numerosTeste.unshift(0);
console.log(numerosTeste);

// Encontrando a primeira ocorrência do elemento especificado
const frutas = ["maçã", "banana", "manga", "abacaxi"];

console.log(frutas.indexOf("maçã"));
console.log(frutas.indexOf("laranja"));

// Encontrar a última ocorrência do elemento especificado
const letras = ["a", "b", "c", "a", "d"];

console.log(letras.lastIndexOf("a"));

// Verifica se um elemento está presente no array
const frutasDona = ["maçã", "banana", "laranja"];

const temMaca = frutasDona.includes("maçã");
const temMelancia = frutasDona.includes("melancia");
console.log(temMaca);
console.log(temMelancia);

// Revertendo uma array 
const testandoReverse = [1, 2, 3, 4, 5];

testandoReverse.reverse();
console.log(testandoReverse)