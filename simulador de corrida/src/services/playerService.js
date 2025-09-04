

export async function verifcChoosePlayer(player1,player2) {

    if (!player1 || !player2){
        console.log("Erro: invalido")
        return false

    }
    if (player1 === player2){
        console.log("Você não pode escolher o mesmo jogador duas vezes!")
        return false
    }
    return true
    
}

