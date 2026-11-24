// MENU HAMBÚRGUER
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
 
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("menu-aberto");
});

//NAVEGAÇÃO ENTRE TELAS
function mostrarTela(id){
    const telas = document.querySelectorAll(".tela");
    
    telas.forEach(tela =>{
        tela.classList.remove("ativa");
    });

    document.getElementById(id).classList.add("ativa");
 
    menu.classList.remove("menu-aberto");
}

// EXEMPLOS DE ARRAY
function executarArray(){
    let texto = "";

    const nomes = ["João", "Maria", "José"];

    texto += "Array original:\n";
    texto += nomes + "\n\n";

    nomes.push("Beatriz");
    texto += "Push (Beatriz):\n";
    texto += nomes + "\n\n";

    nomes.pop();
    texto +="Pop:\n";
    texto += nomes + "\n\n";

    nomes[0] = "João Pedro";
    texto += "Alterando posição 0:\n";
    texto += nomes + "\n\n";

    document.getElementById("resultado-array").innerText = texto;
}

//EXEMPLO DE OBJETO
function executarObjeto(){
    let texto = "";

    const objetoPessoa = {
        nome: "João",
        idade: 30
    };

    texto += "Objeto original:\n";
    texto += JSON.stringify(objetoPessoa, null, 2);
    texto += "\n\n";

    delete objetoPessoa.idade;

    texto += "Removendo idade:\n";
    texto += JSON.stringify(objetoPessoa, null, 2);
    texto += "\n\n";

    objetoPessoa.sobrenome = "Santana";

    texto += "Adicionando sobrenome:\n";
    texto += JSON.stringify(objetoPessoa, null, 2);
    texto += "\n\n";

    objetoPessoa.sobrenome = "Santana Costa";

    texto += "Mutação:\n";
    texto += JSON.stringify(objetoPessoa, null, 2);
    texto += "\n\n";
    

    document.getElementById("resultado-objeto").innerText = texto;
}
