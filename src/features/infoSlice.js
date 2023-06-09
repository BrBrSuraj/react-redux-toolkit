// making a slice mean is that make a variable in store and initialize it

import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    name: "suraj",
    age: 30,
    isMarried: true
}
// slice 
export const infoSlice = createSlice({
    name: "infoSlice", //name must be unique
    initialState: initialStateValue,
    // to update or change the value of variable we need to make a function in slice which can change the value
    reducers: {
        //state mean whole initialStateValue object and action receive the parameter from where changeName function is called
        changeName: (state, action) => {
            state.name = action.payload
        }
    }
})


export const { changeName } = infoSlice.actions
export default infoSlice.reducer