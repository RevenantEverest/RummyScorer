import type { PayloadAction } from '@reduxjs/toolkit';
import type { GameState, Player } from '@@types/gameState';

function nextRound(state: GameState, action: PayloadAction<Player[]>) {
    state.round = state.round + 1;
    state.players = action.payload;
    return state;
};

export default nextRound;