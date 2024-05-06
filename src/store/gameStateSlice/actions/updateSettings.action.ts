import type { PayloadAction } from '@reduxjs/toolkit';
import type { GameState, Settings } from '@@types/gameState';

function updateSettings(state: GameState, action: PayloadAction<Settings>) {
    state.settings = action.payload;
    return state;
};

export default updateSettings;