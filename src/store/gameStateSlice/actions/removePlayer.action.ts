import type { PayloadAction } from '@reduxjs/toolkit';
import type { GameState, Player } from '@@types/gameState';

function removePlayer(state: GameState, action: PayloadAction<number>) {
    const currentPlayers = state.players;
    const playerArr: Player[] = [];
    
    for(let i = 0; i < currentPlayers.length; i++) {
        if(i === action.payload) {
            continue;
        }

        playerArr.push({
            ...currentPlayers[i],
            id: playerArr.length
        });
    };

    state.players = playerArr;
    return state;
};

export default removePlayer;