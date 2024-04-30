import type { PayloadAction } from '@reduxjs/toolkit';
import type { Theme } from '@@types/theme';

import { createSlice } from '@reduxjs/toolkit';
import { dark } from '@@themes';

const initialState: Theme = dark;

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            state = action.payload;
            return state;
        }
    }
});

export const { actions } = themeSlice;