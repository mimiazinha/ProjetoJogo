//xablaudois
//xablaudnv
//const prompt = require('prompt-sync')();

// inclui os sentimentos no inventario de acordo com as escolhas realizadas durante o jogo
function incluirSentimento(sentimento){
    if(!inventario.includes(sentimento)){
        inventario.push(sentimento)
    }
}
//remove os sentimentos do inventario caso a pessoa tenha escolhido utilizar o sentimento para nao ser penalizada
function removeSentimento(sentimento){
    let index = inventario.indexOf(sentimento);
    //alert("inventario "+ inventario + " posição " + index)
    if (index !== -1) {
        inventario.splice(index, 1);
    }
}
// coloca um valor inicial para todas as variaveis
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
//primeira fase do jogo
function fase1(){
    if ((contVida <= 0) && !mantemProgresso1 && !checkpoint2 && !checkpoint3){
        inicializarVariaveis();
    }
    //informativos sobre objetivo do jogo e boas vindas.
    alert("Esse jogo é baseado na história de Cindy Ngamba, seu objetivo é fazer as escolhas certas e juntar pontos para que você possa chegar nas olimpíedas, você também terá um inventario de sentimentos(que poderá utilizar como ajuda em caso de escolhas erradas) a partir da terceira fase. Boa sorte.")
    
    alert("Bem-vindo(a), espero que goste do jogo. \n >>>REFUSENT<<< \n O jogo onde suas escolhas te levam ao sucesso…")
//faz uma pergunta e o jogador devera responder conforme as opções
    let resposta = prompt("Essa será sua primeira escolha: Digite \n 1- Treinar\n 2- Descansar")
//se resposta for positiva, o jogador recebera pontos e beneficios(os sentimentos que serao incluidos no inventario)
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
        
        //em caso de resposta negativa, o jogador sera testado duas vezes e dependendo de sua resposta, o jogador recebera tal sentimento
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
        //se jogador colocar "não" nas duas perguntas, ele perdera pontos e recebera um sentimento negativo.
        }
        if(resposta1 && resposta2 == 2){
            contVida--
            incluirSentimento("preguiça")
        }
        
    }
    //mostra inventario atual
alert("inventario: "+ inventario)
    
// alerta de que conclui fase 1 e checkpoint(caso o jogador queira salvar o jogo, quando der gameover, o jogador podera voltar para a fase em que fez o checkpoint)
    alert("parabens! você concluiu a fase 1.")
    resposta = prompt("Deseja salvar seu progresso? Digite \n 1- Sim\n 2- Não")
    if(resposta == 1){
        checkpoint1 = true;
        mantemProgresso1 = true;
    } else {
        checkpoint1 = false;
        mantemProgresso1 = false;
    }

    
    
    
    return (contVida <= 0); //Retorna se é gameover ou não
}
// da os parabens por chegar na fase dois e começa outro desafio que o jogador tera de escolher a melhor opção
function fase2() {
     alert("Parabéns! Você chegou na fase 2. ")
    alert("É seu aniversário! Sua mãe te perguntou qual presente você vai querer.")
    resposta = prompt("O que você vai escolher? Digite \n 1- Luvas de boxe \n 2- Barbie nova")

    if(resposta == 1){
        contVida++;
        resposta1 = prompt("Sua mãe ofereceu para pagar um treinamento de box com um treinador olímpico, você vai aceitar? Digite \n 1- Sim \n 2- Não.")
       //se responder que sim, aparecera outra pergunta
        if(resposta1 == 1){
            //testa se a resposta é um numero e se é entre o numero 1 e o numero 7(pois a semana tem 7 dias)
            //enquanto nao for digitado um numero conforme os requisitos acima, vai continuar em loop
            while(true){
             let qntDias = Number(prompt("Quantos dias de treinamento você vai fazer por semana?"))
             if(qntDias != 'NaN' && qntDias > 0 && qntDias < 8) {
                if(qntDias < 4) {
                    contVida++
                } else if(qntDias >= 4 && qntDias <= 7){
                    contVida = contVida + 5
                } 
                break; 
                //avisa que digitou fora dos parametros esperados
            } else{
                alert("Hein???? Acho que você digitou errado... ")
            }
        }
    }
    //caso responda nao, o jogador perdera pontos
    }else{
        contVida--;
    }
//outro checkpoint
   
        resposta = prompt("Deseja salvar seu progresso? Digite \n 1- Sim\n 2- Não")
        if(resposta == 1){
            checkpoint1 = false;
            checkpoint2 = true;
        } else {
            checkpoint2 = false;
        }

    //inventario
    alert("inventario: "+ inventario)
    
    return (contVida <= 0); //Retornando se é gameover ou não
}
//fase tres e ultima fase do jogo(nessa etapa é possivel utilizar o inventario para obter beneficios)
function fase3() {
    alert("parabens! você chegou na fase 3. ")
    
    resposta = prompt("Suas notas na escola não estão boas e sua mãe disse que se não melhorar, terá que desistir do boxe. Oque você vai fazer? Digite \n 1- Estudar mais para melhorar as notas \n 2- Desistir de ir para as olimpíadas")
//pergunta algo e conforme a resposta vai adicionar ou remover pontos
    if(resposta == 1){
        contVida = contVida + 2;
        
    }else{
        //permite que o jogador use os sentimentos que tem no inventario para obter beneficios(nao ser penalizado/nao perder pontos)
        resposta = prompt("Você tem certeza? Você possui 'MOTIVAÇÃO' no seu inventario, deseja utilizar? Digite: \n 1- Sim \n 2- Não.")
        if(resposta == 1){
//tira o sentimento do inventario pois o jogador usou
            removeSentimento("motivação")
        } else {
        contVida = contVida - 7; }
    }
//outras perguntas
    resposta = prompt("Você foi convidada para jogar jogos pré olímpicos, você vai aceitar? Digite \n 1- Sim \n 2- Não")
//remove ou adiciona pontos conforme a resposta do jogador
    if(resposta == 1){
        contVida = contVida + 2;
    }//checkpoint
        resposta = prompt("Deseja salvar seu progresso? Digite \n 1- Sim\n 2- Não")
       //coloca falso nos outros checkpoints para que se o jogador escolher salvar, o jogo continue na fase em que o jogador salvou e caso ele nao salve, torna falso o 3
        if(resposta == 1){
            checkpoint1 = false;
            checkpoint2 = false;
            checkpoint3 = true;
        } else {
            checkpoint3 = false;
        }

   
    
    return (contVida <= 0); //Retornando se é gameover ou não
}

// cena da vitoria e um link para mais informacoes sobre a atleta(o link abre uma nova aba)
function cenaVitoria() {
    alert("Vitoria!!!! \n Você chegou nas olimpíadas! \n obrigada por jogar <3 \n Essa é você atualmente: \n ")
    window.open('https://en.wikipedia.org/wiki/Cindy_Ngamba', '_blank');

}

var contVida = 4; //pontos
var inventario = []; //inventario
var recomecarJogo = true; //recomeca o jogo
var ehgameOver = false; //da gameover
var checkpoint1 = false; //checkpoint da primeira fase
var checkpoint2 = false; //checkpoint segunda fase
var checkpoint3 = false; //checkpoint da terceira fase
var mantemProgresso1 = false; //mantem os pontos e o inventario caso de gameover e o jogador tenha salvado o jogo

while(true){ // enquanto for verdadeiro
    if (checkpoint1 || recomecarJogo){ //se checkpoint 1 ou recomecar jogo(reinicia o jogo limpando o inventario e os pontos do jogador)
        ehgameOver = fase1(); //fase 1 recebe gameover(a variavel gameover foi criada como falso entao na fase1, dentro da função, caso o jogo chegue a 0, o gameover sera true)
        if (contVida >= 15) { // 15 é o maximo de pontos que o jogador pode chegar, entao quando o jogador chegar a 15 pontos, a função cenaVitoria sera chamada e ira encerrar o jogo.
            cenaVitoria()
            break;
        } else if(ehgameOver) { //avisara quando der gameover
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

    recomecarJogo = (!checkpoint1 && !checkpoint2 && !checkpoint3); //recomeça o jogo zerando o inventario e os pontos do jogador. (e volta para o inicio do jogo)
}
