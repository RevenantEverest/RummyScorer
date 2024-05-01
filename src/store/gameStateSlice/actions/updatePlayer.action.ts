import type { PayloadAction } from '@reduxjs/toolkit';
import type { GameState, Player } from '@@types/gameState';

function updatePlayer(state: GameState, action: PayloadAction<Player>) {
    const player = action.payload;
    state.players[player.id] = player;
    return state;
};

export default updatePlayer;