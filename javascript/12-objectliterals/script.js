// object literals
const objetoPessoa = {
    nome: "João",
    idade: 30,
};

console.log(objetoPessoa);
console.log(typeof objetoPessoa);
console.log(objetoPessoa.nome);

// Removendo uma propriedade de um objeto
delete objetoPessoa.idade;
console.log(objetoPessoa);

// Adicionando uma propriedade ao objeto
objetoPessoa.sobrenome = "Santana";
console.log(objetoPessoa);

// Mutação
objetoPessoa.sobrenome = "Santana Costa";
console.log(objetoPessoa);

// Metódo Assign
const objeto1 = {
    nome: "Maria",
    idade: 22,
};

const objeto2 = {
    altura: 1.65,
    genero: "Feminino",
};

const objetoDestino = {};

Object.assign(objetoDestino, objeto1, objeto2);
console.log(objetoDestino);

// metodo keys
const chaves = Object.keys(objetoDestino);
console.log(chaves);
