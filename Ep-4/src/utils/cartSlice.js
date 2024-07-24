import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items : []
    },
    reducers:{
        addItem: (state, action) => {
            state.items.push(action.payload)
        },

        // Redux toolkit says, either mutate the state or return a new state
        removeItem: (state, action) => {
            // remove specific item first approach
            const newItems = [...state.items];

            // state.items.length = 0;

            // newItems.forEach((item) => {
            //     if(item.card.info.id != action.payload.card.info.id) {
            //         state.items.push(item);
            //     }
            // })

            // remove specific item second approach

            return {items: newItems.filter((item) => {
                return item.card.info.id != action.payload.card.info.id
            })}

            // state.items.pop();
        },

        clearCart: (state) => {
            state.items.length = 0;
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;