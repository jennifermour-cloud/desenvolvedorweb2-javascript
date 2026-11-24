function saudarCliente(){
    const nome = document.getElementById("nome").value;
    const elementoMensagem = document.getElementById("mensagem-boas-vindas");

    if (nome.trim() !== "") {
        // Interpolação de string usando Template Literals
    elementoMensagem.textContent = `Ola, ${nome}! Seja bem-vindo(a).`;
    } else {
        elementoMensagem.textContent = "Por favor, digite um nome válido.";
    }
}

function calcular() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const divResultados = document.getElementById("resultados");

    //Operação matemáticas
    const soma = n1 + n2;
    const subtracao = n1 - n2;
    const multiplicacao = n1 * n2;
    const divisao = n2 !== 0 ? (n1 / n2).toFixed(2) : "divisão por zero não é permitida";

    // Exibição dos resultado com interpolação
  divResultados.innerHTML = `
    <p><strong>Soma:</strong> ${n1} + ${n2} = ${soma}</p>
    <p><strong>Subtração:</strong> ${n1} - ${n2} = ${subtracao}</p>
    <p><strong>Multiplicação:</strong> ${n1} x ${n2} = ${multiplicacao}</p>
    <p><strong>Divisão:</strong> ${n1} ÷ ${n2} = ${divisao}</p>

`;
}