import type { PayloadAction } from '@reduxjs/toolkit';
import type { GameState } from '@@types/gameState';

function setRound(state: GameState, action: PayloadAction<number>) {
    state.round = action.payload;
    return state;
};

export default setRound;