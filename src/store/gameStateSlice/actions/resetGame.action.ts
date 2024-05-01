import type { GameState } from '@@types/gameState';

function resetGame(state: GameState) {
    const currentPlayers = state.players;
    
    for(let i = 0; i < currentPlayers.length; i++) {
        currentPlayers[i].score = 0;
        currentPlayers[i].scoreHistory = [];
    };

    state.players = currentPlayers;
    state.round = 1;
    return state;
};

export default resetGame;