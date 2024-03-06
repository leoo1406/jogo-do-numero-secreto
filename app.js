let listadeNumerosSorteados = [];
let numeroLimite = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;
// let titulo = document.querySelector("h1");
//     titulo.innerHTML = "Jogo do número secreto!";

// let paragrafo = document.querySelector("p");
//     paragrafo.innerHTML = "Digite um número entre 1 e 10"; 

      // funções substituídas no mostrarTextoTela

    function mostrarTextoTela (tag, texto) { //parametro onde quer substituir, depois "," e o texto
        let campo = document.querySelector (tag);
        campo.innerHTML = texto;
    }
    function mostrarTextoInicial () {     // mostra somente mensagem inicial pra começo/reset do jogo
        mostrarTextoTela ("h1", "Jogo do número secreto!");
        mostrarTextoTela ("p","Digite um número entre 1 e 10");
    }

    mostrarTextoInicial();
    
function verificarChute () {
    let chute = document.querySelector ("input").value;

    if (chute == numeroAleatorio) {
        mostrarTextoTela ("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas!" : "tentativa!";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        mostrarTextoTela ("p", mensagemTentativas);
        document.getElementById ("reiniciar").removeAttribute("disabled");
        } else {
            if (chute > numeroAleatorio) {
                mostrarTextoTela ("p", "O número secreto é menor");
            } else {
                mostrarTextoTela ("p", "O número secreto é maior");
            }
            tentativas++;
            limparTela();
            }
        }

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosNaLista = listadeNumerosSorteados.length;

    if (quantidadeElementosNaLista == numeroLimite) {          //se chegar ao maximo da lista, reseta os numeros e podem ir de novo
        listadeNumerosSorteados = [];
    }

    if (listadeNumerosSorteados.includes(numeroEscolhido)) {        //se já tiver o numero na lista, gera outro que nao foi
        return gerarNumeroAleatorio();
    } else {
        listadeNumerosSorteados.push (numeroEscolhido);
        return numeroEscolhido;                                 //se não tiver, retorna o numero gerado
    }
}

function limparTela () {
    chute = document.querySelector ("input");
    chute.value = "";
}

function reiniciarJogo () {
    numeroAleatorio = gerarNumeroAleatorio();
    limparTela();
    tentativas = 1;
    mostrarTextoInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}