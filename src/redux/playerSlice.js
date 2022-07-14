import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
    name:"player",
    initialState:{
        playing:false
    },
    reducers:{
        play: (state)=>{
            state.playing = true
        },
        stop: (state) => {
            state.playing = false
        }
    }
})

export const { play, stop } = playerSlice.actions;
export default playerSlice.reducer;
