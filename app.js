let listaNEscolhidos = [];
let maxNum = 100;
let numeroSecreto = gNAleatorio();
let tentativa = 1;
function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}) 
}

eMInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTexto('h1', 'Acertou!');
        let pTentativa = tentativa > 1 ? 'tentativas!' : 'tentativa!';
        let mTentativas = `Você descobriu o número secreto  ${numeroSecreto} em ${tentativa} ${pTentativa}`;
        exibirTexto('p', mTentativas);
        ligaBotao();
    } else {
        if(chute > numeroSecreto){
            exibirTexto('p', 'O número secreto é menor');
        } else {
            exibirTexto('p', 'O número secreto é maior');
        }
    }
    tentativa++;
    limpaCampo();
}
function eMInicial() {
    exibirTexto('h1', 'Jogo do Número Secreto');
    exibirTexto('p', `Escolha um número entre 1 e ${maxNum}`);
}
function gNAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * maxNum + 1);
    let qNumerosSortiados = listaNEscolhidos.length;
    if (qNumerosSortiados == maxNum){
        listaNEscolhidos = [];
    }
    if (listaNEscolhidos.includes(numeroEscolhido)){
        return gNAleatorio();
    } else{
        listaNEscolhidos.push(numeroEscolhido);
        console.log(listaNEscolhidos);
        return numeroEscolhido;
    }
}
function limpaCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function ligaBotao(){
    document.getElementById('reiniciar').removeAttribute('disabled');
}
function reiniciarJogo(){
    numeroSecreto = gNAleatorio();
    tentativa = 1;
    eMInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}