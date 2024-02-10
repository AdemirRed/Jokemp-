const pedra = document.getElementById("pedra")
const papel = document.getElementById("papel")
const tesoura = document.getElementById("tesoura")
const seusPontos = document.getElementById("seusPontos")
const pontosBoot = document.getElementById("pontosBoot")
const empate = document.getElementById("empate")
const resultado = document.querySelector(".Resultado")

const botaoAutoPlay = document.getElementById("autoPlay")
const parar = document.getElementById("stop")
const limpar = document.getElementById("clear")


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

function jogoAutomatico(escolhaHumano) {
    let escolhaBoot = ""
    // Gerar escolha aleatória para a máquina
    escolhaHumano = escolhasPossiveis[Math.floor(Math.random() * escolhasPossiveis.length)];
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



function start() {
    botaoAutoPlay.disabled = true;
    parar.disabled = false;
    limpar.disabled = true;
    jogar = setInterval(() => {
        jogoAutomatico()

    }, 100);

}

function stop() {
    botaoAutoPlay.disabled = false;
    parar.disabled = true;
    limpar.disabled = false;
    clearInterval(jogar)
    clearInterval(jogar)
}


function reiniciar() {
    pontos1 = 0
    pontos2 = 0
    pontosEmpate = 0

    empate.innerText = pontosEmpate; // Corrigido
    seusPontos.innerText = pontos1; // Corrigido
    pontosBoot.innerText = pontos2; // Corrigido


    let msg = "Limpando";
    let contador = 0;
    const loadingDiv = document.getElementById("loadingDiv"); // Elemento div onde o loading será exibido

    const intervalId = setInterval(() => {
        loadingDiv.textContent = msg + "...".repeat(contador % 4); // Atualiza o texto na div com os pontos
        contador++;
    }, 500);  // Intervalo de meio segundo

    setTimeout(() => {
        clearInterval(intervalId);  // Limpa o intervalo após 10 segundos
        loadingDiv.textContent = "Concluído";  // Atualiza o texto na div para a mensagem de conclusão
        setTimeout(() => { loadingDiv.textContent = ""; }, 1000);
    }, 2000);  // 10 segundos







}
