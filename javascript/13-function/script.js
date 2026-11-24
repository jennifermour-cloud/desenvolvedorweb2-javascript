// Função
function minhaFuncao (){
    console.log("Teste de Função");
}

minhaFuncao();
minhaFuncao();

// Função na variável
const minhaFuncaonaVariavel = function(){
    console.log("Teste de função na variável");
}

minhaFuncaonaVariavel();

// Funções com parâmetros
function saudar(nome){
    console.log(`Olá, ${nome}`);
}

saudar("Victor");

function potencia(base, expoente){
    return base ** expoente;
}

console.log(potencia(2,3));

// return
const a = 5;
const b = 6;

function soma (n1, n2){
    return n1 + n2;
}

const resultado = soma(a, b); //a constante guarda o retun da função
console.log(resultado);

console.log(soma(a, b));

// Função anônima
const raizQuadrada = (x) => {
    return x * x;
}


console.log(raizQuadrada(4));

// Funções matemáticas 
let c = 2;
let d = 3;
let f = 2.7;
let h = 4;
let i = 9;
let j = 1;

console.log(Math.pow(c,d)); // potência
console.log (Math.round(f)); // aproximadamente
console.log(Math.max(h, i, j)); // número maior
console.log(Math.min(h, i, j)); // número menor