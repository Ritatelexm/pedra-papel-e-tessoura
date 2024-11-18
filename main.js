const elementos = document.querySelectorAll(".opcao-jogador div > img");
let jogadorOpt = "";
let computadorOpt = "";
let scoreJogador = 0;
let scoreComputador = 0;

function resetOpacityJogador() {
    for(let i = 0; i < elementos.length; i++) {
        elementos[i].style.opacity = 0.3;
    }
}

function resetComputador(opcaoComputador) {
    for (let i = 0; i < opcaoComputador.length; i++){
        opcaoComputador[i].style.opacity = 0.3;
    }
}

function validarVitoria() {
    let vencedor = document.querySelector("#resultado");
    if (jogadorOpt == "pedra"){
        if(computadorOpt == "pedra"){
            vencedor.innerHTML = "O jogo foi empatado";
        } else if(computadorOpt == "papel"){
            vencedor.innerHTML = "O computador ganhou";
            scoreComputador++;
        } else if(computadorOpt == "tesoura"){
            vencedor.innerHTML = "Você ganhou!!!";
            scoreJogador++;
        } 
    } else if (jogadorOpt == "papel"){
        if(computadorOpt == "pedra"){
            vencedor.innerHTML = "Você ganhou!!!";
            scoreJogador++;
        } else if(computadorOpt == "papel"){
            vencedor.innerHTML = "O jogo foi empatado";
        } else if(computadorOpt == "tesoura"){
            vencedor.innerHTML = "O computador ganhou!!!";
            scoreComputador++;
        }
    } else if (jogadorOpt == "tesoura"){
        if(computadorOpt == "pedra"){
            vencedor.innerHTML = "O computador ganhou";
            scoreComputador++;
        } else if(computadorOpt == "papel"){
            vencedor.innerHTML = "Você ganhou!!!";
            scoreJogador++;
        } else if(computadorOpt == "tesoura"){
            vencedor.innerHTML = "O jogo foi empatado!!!";
        }
    }
    atualizarPlacar();
}

function atualizarPlacar() {
    document.getElementById('score-jogador').textContent = scoreJogador;
    document.getElementById('score-computador').textContent = scoreComputador;
}

function computadorJogar(){
    let rand = Math.floor(Math.random() * 3);
    const opcaoComputador = document.querySelectorAll(
        ".opcao-computador div > img"
    );
    resetComputador(opcaoComputador);

    for(let i = 0; i < opcaoComputador.length; i++){
        if(i == rand){
            opcaoComputador[i].style.opacity = 1;
            computadorOpt = opcaoComputador[i].getAttribute("opt");
        }
    } 
    validarVitoria();
}

for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', function(t) {
        resetOpacityJogador();

        t.target.style.opacity = 1;
        jogadorOpt = t.target.getAttribute('opt');
        computadorJogar();
    });
}
