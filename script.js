const pedra = document.getElementById("pedra")
const papel = document.getElementById("papel")
const tesoura = document.getElementById("tesoura")
const seusPontos = document.getElementById("seusPontos")
const pontosBoot = document.getElementById("pontosBoot")
const empate = document.getElementById("empate")
const resultado = document.querySelector(".Resultado")

let pontos1 = 0
let pontos2 = 0
let pontosEmpate = 0

const escolhasPossiveis = ["pedra", "papel", "tesoura"];

pedra.addEventListener("click", () => {
    jogo("pedra");
});
papel.addEventListener("click", () => {
    jogo("papel");
});
tesoura.addEventListener("click", () => {
    jogo("tesoura");
});

function jogo(escolhaHumano) {
    let escolhaBoot = ""
    // Gerar escolha aleatória para a máquina

    escolhaBoot = escolhasPossiveis[Math.floor(Math.random() * escolhasPossiveis.length)];
    console.log("A maquina escolheu " + escolhaBoot)
    console.log("Você escolheu escolheu " + escolhaHumano)


    if (escolhaHumano == escolhaBoot) {
        // Quando o jogo empatar
        pontosEmpate++;
        empate.innerText = pontosEmpate; // Corrigido
        resultado.innerText = "Deu Empate!"

        //Metodo para quando o humano ganha
        //Parte do humano
    } else if ((escolhaHumano == "pedra" && escolhaBoot == "tesoura") ||
        (escolhaHumano == "papel" && escolhaBoot == "pedra") ||
        (escolhaHumano == "tesoura" && escolhaBoot == "papel")
    ) {
        pontos1++;
        seusPontos.innerText = pontos1; // Corrigido
        resultado.innerText = "Voce Ganhou!"
        //Parte da maquina quando a maquina ganha
    } else {
        pontos2++;
        pontosBoot.innerText = pontos2; // Corrigido
        resultado.innerText = "Você Perdeu para o Boot!"

    }
}