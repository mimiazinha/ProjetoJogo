//xablaudois
//xablaudnv
//const prompt = require('prompt-sync')();


function incluirSentimento(sentimento){
    if(!inventario.includes(sentimento)){
        inventario.push(sentimento)
    }
}
function removeSentimento(sentimento){
    let index = inventario.indexOf(sentimento);
    //alert("inventario "+ inventario + " posição " + index)
    if (index !== -1) {
        inventario.splice(index, 1);
    }
}

function inicializarVariaveis() { 
    contVida = 4;
    inventario = [];
    recomecarJogo = true;
    ehgameOver = false;
    checkpoint1 = false;
    checkpoint2 = false;
    checkpoint3 = false;
    mantemProgresso1 = false;
    //alert("Inventario limpo.");
}

function fase1(){
    if ((contVida <= 0) && !mantemProgresso1 && !checkpoint2 && !checkpoint3){
        inicializarVariaveis();
    }
    
    alert("Esse jogo é baseado na história de Cindy Ngamba, seu objetivo é fazer as escolhar certas e juntar pontos para que você possa chegar nas olimpíedas, você também terá um inventario de sentimentos(que poderá utilizar como ajuda em caso de escolhas erradas) a partir da terceira fase. Boa sorte.")
    
    alert("Bem-vindo(a), espero que goste do jogo. \n >>>REFUSENT<<< \n O jogo onde suas escolhas te levam ao sucesso…")

    let resposta = prompt("Essa será sua primeira escolha: Digite \n 1- Treinar\n 2- Descansar")

    if(resposta == 1){
        resposta = prompt("Seus amigos estão na academia e te convidaram para treinar junto, o que você vai fazer? Digite \n 1- Treinar com seus amigos\n 2- Recusar o convite e treinar em casa.")
        if(resposta == 1){
            contVida++
        incluirSentimento("motivação")
        incluirSentimento("felicidade")
        incluirSentimento("energia")
        }
        else if(resposta == 2) {
            contVida++
            incluirSentimento("solidão")
        }
        
        
    }else if(resposta == 2){
        let resposta1
        
        if(resposta1 == 1){
            resposta1 = prompt("Você está se sentindo um pouco cansado(a) hoje? Parece que a energia está um pouco em baixa. Digite \n 1- Sim\n 2- Não. ")
            //resposta1 = prompt("Você tem 'ENERGIA' em seu inventário, deseja utilizar? Digite \n 1- Sim\n 2- Não. ")
            if(resposta1 == 1){
                incluirSentimento("cansaço")

            }
            
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
    //if(inventario.includes("preguiça")){
        //fazer codigo para tirar preguiça
    //}

    alert("parabens! você concluiu a fase 1.")
    resposta = prompt("Deseja salvar seu progresso? Digite \n 1- Sim\n 2- Não")
    if(resposta == 1){
        checkpoint1 = true;
        mantemProgresso1 = true;
    } else {
        checkpoint1 = false;
        mantemProgresso1 = false;
    }

    
    //alert("contVida cena 1: "+ contVida)
    
    return (contVida <= 0); //Retornando se é gameover ou não
}

function fase2() {
     alert("Parabéns! Você chegou na fase 2. ")
    alert("É seu aniversário! Sua mãe te perguntou qual presente você vai querer.")
    resposta = prompt("O que você vai escolher? Digite \n 1- Luvas de boxe \n 2- Barbie nova")

    if(resposta == 1){
        contVida++;
        resposta1 = prompt("Sua mãe ofereceu para pagar um treinamento de box com um treinador olímpico, você vai aceitar? Digite \n 1- Sim \n 2- Não.")
       
        if(resposta1 == 1){
            
            while(true){
             let qntDias = Number(prompt("Quantos dias de treinamento você vai fazer por semana?"))
             if(qntDias != 'NaN' && qntDias > 0 && qntDias < 8) {
                if(qntDias < 4) {
                    contVida++
                } else if(qntDias >= 4 && qntDias <= 7){
                    contVida = contVida + 5
                } 
                break; 
            } else{
                alert("Hein???? Acho que você digitou errado... ")
            }
        }
    }
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

    //alert("contVida cena 2: "+ contVida)
    alert("inventario: "+ inventario)
    
    return (contVida <= 0); //Retornando se é gameover ou não
}

function fase3() {
    alert("parabens! você chegou na fase 3. ")
    
    resposta = prompt("Suas notas na escola não estão boas e sua mãe disse que se não melhorar, terá que desistir do boxe. Oque você vai fazer? Digite \n 1- Estudar mais para melhorar as notas \n 2- Desistir de ir para as olimpíadas")

    if(resposta == 1){
        contVida = contVida + 2;
    }else{
        resposta = prompt("Você tem certeza? Você possui 'MOTIVAÇÃO' no seu inventario, deseja utilizar? Digite: \n 1- Sim \n 2- Não.")
        if(resposta == 1){

            removeSentimento("motivação")
        } else {
        contVida = contVida - 7; }
    }

    resposta = prompt("Você foi convidada para jogar jogos pré olímpicos, você vai aceitar? Digite \n 1- Sim \n 2- Não")

    if(resposta == 1){
        contVida = contVida + 2;
    }
        resposta = prompt("Deseja salvar seu progresso? Digite \n 1- Sim\n 2- Não")
       
        if(resposta == 1){
            checkpoint1 = false;
            checkpoint2 = false;
            checkpoint3 = true;
        } else {
            checkpoint3 = false;
        }

    //alert("contVida cena 3: "+ contVida)
    //alert("inventario: "+ inventario)
    
    return (contVida <= 0); //Retornando se é gameover ou não
}


function cenaVitoria() {
    alert("Vitoria!!!! \n Você chegou nas olimpíadas! \n obrigada por jogar <3 \n Essa é você atualmente: \n ")
    window.open('https://en.wikipedia.org/wiki/Cindy_Ngamba', '_blank');

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
        ehgameOver = fase1();
        if (contVida >= 15) {
            cenaVitoria()
            break;
        } else if(ehgameOver) {
            alert("Game Over");
        }
    }
    if (checkpoint2 || recomecarJogo){
        ehgameOver = fase2();
        if (contVida >= 15) {
            cenaVitoria()
            break;
        } else if(ehgameOver) {
            alert("Game Over")
        }
    }
    if (checkpoint3 || recomecarJogo){
        ehgameOver = fase3();
        if (contVida >= 15) {
            cenaVitoria()
            break;
        } else if(ehgameOver) {
            alert("Game Over")
        }
    }

    recomecarJogo = (!checkpoint1 && !checkpoint2 && !checkpoint3);
}
