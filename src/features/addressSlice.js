import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    city: "kathmadu",
    province: 3
}
export const addressSlice = createSlice({
    name: "address",
    initialState: initialStateValue,
    reducers: {
        changeAddress: (state, action) => {
            state.city = action.payload
        },


    }
})

export const { changeAddress } = addressSlice.actions
export default addressSlice.reducer