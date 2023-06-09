import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    name: 'apple',
    price: '$1000',
    qty: 10

}
export const productSlice = createSlice({
    name: 'product',
    initialState: initialStateValue,
    reducers: {
        changeProductName: (state, action) => {
            state.name = action.payload
        }

    }
})


export const { changeProductName } = productSlice.actions
export default productSlice.reducer