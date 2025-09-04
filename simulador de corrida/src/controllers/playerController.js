import { verifcChoosePlayer } from "../services/playerService.js";
import { players } from "../models/player.js";
import PromptSync from "prompt-sync"
const prompt = PromptSync();


export async function choosePlayers(){

    console.log("Personagem")

    console.log("Mario - 1\nLuigi - 2\nBowser - 3\nPeach - 4\nYoshi - 5\nDonkey Kong - 6")

    const firstPlayer = (prompt("Escolha o primeiro jogador: "))
    const secondPlayer = (prompt("Escolha o segundo jogador: "))

    const player1 = players[firstPlayer - 1]
    const player2 = players[secondPlayer - 1]

    if (!(await verifcChoosePlayer(player1,player2))){
        return choosePlayers()
    }
    
    console.log(`Jogadores selecionados: ${player1.nome} e ${player2.nome}`)
    
    return {
        player1,
        player2,
    }

    

}

