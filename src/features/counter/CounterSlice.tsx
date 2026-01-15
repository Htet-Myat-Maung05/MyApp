import { createSlice } from "@reduxjs/toolkit"

export interface CounterState {
    count: number
}

const initialState: CounterState = {
    count: 0
}

export const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
                state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        }
    }
})

export const {increment, decrement, reset} =CounterSlice.actions;
export default CounterSlice.reducer;