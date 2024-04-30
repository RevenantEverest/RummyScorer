import type { PayloadAction } from '@reduxjs/toolkit';
import type { GameState, Player } from '@@types/gameState';

import { createSlice } from '@reduxjs/toolkit';

const initialState: GameState = {
    round: 1,
    players: {}
};

export const gameStateSlice = createSlice({
    name: "gameState",
    initialState,
    reducers: {
        setRound: (state, action: PayloadAction<number>) => {
            state.round = action.payload;
            return state;
        },
        addPlayer: (state, action: PayloadAction<Player>) => {
            const newPlayer = action.payload;
            state.players[newPlayer.id] = newPlayer;
            return state;
        },
        updatePlayer: (state, action: PayloadAction<Player>) => {
            const player = action.payload;
            state.players[player.id] = player;
            return state;
        },
        nextRound: (state) => {
            state.round = state.round + 1;
            return state;
        }
    }
});

export const { actions } = gameStateSlice;