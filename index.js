//xablaudois
//xablaudnv
//const prompt = require('prompt-sync')();


function incluirSentimento(sentimento){
    if(!inventario.includes(sentimento)){
        inventario.push(sentimento)
    }
}

function cena1(){
    if ((contVida <= 0) && !mantemProgresso1 && !checkpoint2 && !checkpoint3){
        contVida = 4;
        inventario = [];
        alert("Inventario limpo.")
    }
    
    alert("Esse jogo é baseado na história de Cindy Ngamba, seu objetivo é fazer as escolhar certas e juntar pontos para que você possa chegar nas olimpíedas, boa sorte.")
    
    alert("Bem-vindo(a), espero que goste do jogo. \n >>>REFUSENT<<< \n O jogo onde suas escolhas te levam ao sucesso…")

    let resposta = prompt("Essa será sua primeira escolha: Digite \n 1- Treinar\n 2- Descansar")

    if(resposta == 1){
        contVida++
        incluirSentimento("motivação")
        incluirSentimento("felicidade")
        
    }else if(resposta == 2){
        let resposta1
        resposta1 = prompt("Você está se sentindo um pouco cansado(a) hoje? Parece que a energia está um pouco em baixa. Digite \n 1- Sim\n 2- Não. ")
        if(resposta1 == 1){
            incluirSentimento("cansaço")
            //cansaço físico ou mental.
        }
        else {

        }
        let resposta2
        resposta2 = prompt("Você está precisando de um intervalo ou de um tempo para recarregar as energias? Digite \n 1- Sim\n 2- Não. ")
        if(resposta2 == 1){
            incluirSentimento("cansaço")
            //cansaço físico ou mental.
        }
        else {
        
        }
        if(resposta1 && resposta2 == 2){
            contVida--
            incluirSentimento("preguiça")
        }
        
    }
alert("inventario: "+ inventario)
    if(inventario.includes("preguiça")){
        //fazer codigo para tirar preguiça
    }

    alert("parabens! você concluiu a fase 1.")
    resposta = prompt("Deseja salvar seu progresso? Digite \n 1- Sim\n 2- Não")
    if(resposta == 1){
        checkpoint1 = true;
        mantemProgresso1 = true;
    } else {
        checkpoint1 = false;
        mantemProgresso1 = false;
    }

    
    alert("contVida cena 1: "+ contVida)
    
    return (contVida <= 0); //Retornando se é gameover ou não
}

function cena2() {
     alert("parabens! você chegou na fase 2. ")
    alert("Parabens! sua historia esta se formando aos poucos, continue assim!")
    alert("É seu aniversário! Sua mãe te perguntou qual presente você vai querer.")
    resposta = prompt("Qual presente vai pedir para sua mãe? Digite \n 1- Luvas de boxe \n 2- Barbie nova")

    if(resposta == 1){
        contVida++;
    }else{
        contVida--;
    }

   
        resposta = prompt("Deseja salvar seu progresso? Digite \n 1- Sim\n 2- Não")
        if(resposta == 1){
            checkpoint1 = false;
            checkpoint2 = true;
        } else {
            checkpoint2 = false;
        }

    alert("contVida cena 2: "+ contVida)
    alert("inventario: "+ inventario)
    
    return (contVida <= 0); //Retornando se é gameover ou não
}

function cena3() {
    alert("parabens! você chegou na fase 3. ")
    alert("Você está na aula de boxe")
    alert("você fez um movimento errado e sua professora está muito brava com você!")
    resposta = prompt("Oque você vai fazer? Digite \n 1- Pedir desculpa e fazer melhor da proxima vez \n 2- Desistir das aulas de boxe")

    if(resposta == 1){
        contVida++;
    }else{
        contVida--;
    }

   
        resposta = prompt("Deseja salvar seu progresso? Digite \n 1- Sim\n 2- Não")
       
        if(resposta == 1){
            checkpoint1 = false;
            checkpoint2 = false;
            checkpoint3 = true;
        } else {
            checkpoint3 = false;
        }

    alert("contVida cena 3: "+ contVida)
    alert("inventario: "+ inventario)
    
    return (contVida <= 0); //Retornando se é gameover ou não
}


function cenaVitoria() {
    alert("Vitoria!!!! \n Você chegou nas olimpiedas! \n obrigada por jogar <3 ")
}

var contVida = 4;
var inventario = [];
var recomecarJogo = true;
var ehgameOver = false;
var checkpoint1 = false;
var checkpoint2 = false;
var checkpoint3 = false;
var mantemProgresso1 = false;

while(true){
    if (checkpoint1 || recomecarJogo){
        ehgameOver = cena1();
        if (contVida >= 15) {
            cenaVitoria()
            break;
        } else if(ehgameOver) {
            alert("Game Over");
        }
    }
    if (checkpoint2 || recomecarJogo){
        ehgameOver = cena2();
        if (contVida >= 15) {
            cenaVitoria()
            break;
        } else if(ehgameOver) {
            alert("Game Over")
        }
    }
    if (checkpoint3 || recomecarJogo){
        ehgameOver = cena3();
        if (contVida >= 15) {
            cenaVitoria()
            break;
        } else if(ehgameOver) {
            alert("Game Over")
        }
    }

    recomecarJogo = (!checkpoint1 && !checkpoint2 && !checkpoint3);
}
