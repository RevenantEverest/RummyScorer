import type { GameState } from '@@types/gameState';

import { createSlice } from '@reduxjs/toolkit';
import * as sliceActions from './actions';

const initialState: GameState = {
    round: 1,
    players: [],
    settings: {
        dirtyRummy: false
    }
};

export const gameStateSlice = createSlice({
    name: "gameState",
    initialState,
    reducers: sliceActions
});

export const { actions } = gameStateSlice;