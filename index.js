//const prompt = require('prompt-sync')();
var contOlimpiadas = 1

cena1()

function cena1(){
    
    alert("Esse jogo é baseado na história de Cindy Ngamba, seu objetivo é fazer as escolhar certas e juntar pontos para que você possa chegar nas olimpíedas, boa sorte.")
    
    alert("Bem-vindo(a), espero que goste do jogo. \n >>>REFUSENT<<< \n O jogo onde suas escolhas te levam ao sucesso…")

    let resposta = prompt("Essa será sua primeira escolha: Digite \n 1- Treinar\n 2- Descansar")

    if(resposta == 1){
        contOlimpiadas++
    }else{
        contOlimpiadas--
    }

    alert("Checkpoint 1")
    resposta = prompt("Deseja salvar seu progresso? Digite \n 1- Sim\n 2- Não")
    var checkpoint1 = true;
    

}

function cena2() {
   
    alert("Parabens! sua historia esta se formando aos poucos, continue assim!")
    alert("É seu aniversário! Sua mãe te perguntou qual presente você vai querer.")
    resposta = prompt("Qual presente vai pedir para sua mãe? Digite \n 1- Luvas de boxe \n 2- Barbie nova")

    if(resposta == 1){
        contOlimpiadas++
    }else{
        contOlimpiadas--
    }

    alert("Checkpoint 2")
        resposta = prompt("Deseja salvar seu progresso? Digite \n 1- Sim\n 2- Não")
        checkpoint1 = false;
        checkpoint2 = true;

    }
function cena3() {

    alert("Você está na aula de boxe")
    alert("você fez um movimento errado e sua professora está muito brava com você!")
    resposta = prompt("Oque você vai fazer? Digite \n 1- Pedir desculpa e fazer melhor da proxima vez \n 2- Desistir das aulas de boxe")

    if(resposta == 1){
        contOlimpiadas++
    }else{
        contOlimpiadas--
    }

    alert("Checkpoint 3")
        resposta = prompt("Deseja salvar seu progresso? Digite \n 1- Sim\n 2- Não")
        checkpoint1 = false;
        checkpoint2 = false;
        checkpoint3 = true;

    }


function cenaVitoria() {
    alert("Vitoria!!!! \n Você chegou nas olimpiedas! \n obrigada por jogar <3 ")
}

while(contOlimpiadas != 0){
    cena1();
    cena2();
    cena3();


    if (contOlimpiadas === 10) {
        cenaVitoria()
        break;
    }
}

if(contOlimpiedas == 0) {
    alert("Game Over")
}
if(checkpoint1 == true){
    cena1();
}else if(checkpoint2 == true){
    cena2();
}else if(checkpoint3 == true){
    cena3();
}

//fim
