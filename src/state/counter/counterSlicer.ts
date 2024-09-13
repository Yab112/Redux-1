import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
}

const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(incrementAsync.pending, () => {
            console.log("loading...")
        })
        .addCase(incrementAsync.fulfilled, (state, action) => {
            state.value += action.payload
        })
    }
})

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount: number) => {
         await new Promise<number>((resolve) =>
            setTimeout(() => resolve(amount), 1000)
        );
        return amount
    }
)

export const { increment, decrement, incrementByAmount } = CounterSlice.actions;
export default CounterSlice.reducer;
