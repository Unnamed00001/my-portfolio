import { rollDice,getRandomBlock} from "./diceService.js"
import { logRollResult } from "../utils/logger.js"



async function playRaceEngine(player1,player2) {

    for(let round = 1; round <=5; round++ ){
        console.log(`🏁 Rodada ${round}`)

        let block = await getRandomBlock()
        console.log(`Bloco: ${block}`)
        // rolar dados
        let diceResult1 = await rollDice()
        let diceResult2 = await rollDice()
    
        // teste de habilidade
        let testSkill1 = 0
        let testSkill2 = 0

        if(block === "RETA"){

            testSkill1 = diceResult1 + player1.velocidade
            testSkill2 = diceResult2 + player2.velocidade

            await logRollResult(player1.nome,"velocidade", diceResult1, player1.velocidade)
            await logRollResult(player2.nome,"velocidade", diceResult2, player2.velocidade)
        
        }

        if(block === "CURVA"){

            testSkill1 = diceResult1 + player1.manobrabilidade
            testSkill2 = diceResult2 + player2.manobrabilidade

            await logRollResult(player1.nome,"manobrabilidade", diceResult1, player1.manobrabilidade)
            await logRollResult(player2.nome,"manobrabilidade", diceResult2, player2.manobrabilidade)
            
        }

        if(block === "CONFRONTO"){

            let powerResult1 = diceResult1 + player1.poder
            let powerResult2 = diceResult2 + player2.poder

            console.log(`${player1.nome} confrontou com ${player2.nome} 🥊🥊`)
            
            await logRollResult(player1.nome,"poder", diceResult1, player1.poder)
            await logRollResult(player2.nome,"poder", diceResult2, player2.poder)

            if(powerResult1 > powerResult2 && player2.pontos > 0){
                console.log(`${player1.nome} venceu o confronto! ${player2.nome} perdeu 1 ponto 🐢`)
                player2.pontos--
            }

            if (powerResult2 > powerResult1 && player1.pontos > 0){
                console.log(`${player2.nome} venceu o confronto! ${player1.nome} perdeu 1 ponto 🐢`)
                player1.pontos--
            }

            console.log(powerResult2 === powerResult1 ? "Confronto empatado! Nenhum perde pontos" : "")
            

            /* 
            player1.pontos -= powerResult1 > powerResult2 && player2.pontos > 0 ? 1 : 0
            if (powerResult1 > powerResult2){
                if(character2.PONTOS > 0){
                    character2.PONTOS--
                }
            }

            player1.pontos -= powerResult2 > powerResult1 && player1.pontos > 0 ? 1 : 0
                if (powerResult2 > powerResult1){
                if (character1.PONTOS > 0){
                    character1.PONTOS--
                }
            }
            
            if (powerResult2 === powerResult1){
                console.log("Confronto empatado! Nenhum perde pontos")
            }*/
        
        }

        if (testSkill1 > testSkill2){
            console.log(`${player1.nome} marcou um ponto!`)
            player1.pontos++
        }
        else if (testSkill2 > testSkill1){
            console.log(`${player2.nome} marcou um ponto!`)
            player2.pontos++
        }
        
        
        console.log("-----------------------------------------")
    }

}


async function declareWinner(player1, player2) {

console.log("Resultado final:")
console.log(`${player1.nome}: ${player1.pontos} pontos(s)`)
console.log(`${player2.nome}: ${player2.pontos} pontos(s)`)

    if (player1.pontos > player2.pontos){
        console.log(`\n${player1.nome} venceu a corrida! Parabens 🏆`)
    }else if (player2.pontos > player1.pontos){
        console.log(`\n${player2.nome} venceu a corrida! Parabens 🏆`)
    }else{
        console.log("A corrida terminou em empate")
    }
}  


export {playRaceEngine, declareWinner}