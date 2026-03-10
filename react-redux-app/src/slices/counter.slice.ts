import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state, action) => {
            state.value += 1;
            return state;
        },
        decrement: (state, action) => {
            state.value -= 1;
            return state;
        },
        reset: (state, action) => {
            state.value = 0;
            return state;
        }
    },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer; //{ value: 1 } - { value: 0 }