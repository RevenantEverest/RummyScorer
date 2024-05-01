import type { PayloadAction } from '@reduxjs/toolkit';
import type { GameState, Player } from '@@types/gameState';

function addPlayer(state: GameState, action: PayloadAction<Player>) {
    const newPlayer = action.payload;
    state.players[newPlayer.id] = newPlayer;
    return state;
};

export default addPlayer;