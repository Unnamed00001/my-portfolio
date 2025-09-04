import { declareWinner, playRaceEngine } from "./services/raceService.js"
import { choosePlayers } from "./controllers/playerController.js"

(async function main() {
    const {player1, player2 } = await choosePlayers()
    
    await playRaceEngine(player1,player2)
    await declareWinner(player1,player2)
})()

