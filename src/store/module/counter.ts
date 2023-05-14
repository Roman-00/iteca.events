import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: CounterType = {
    value: 0,
};

export const counterSlice = createSlice({
    name:     'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
