import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  items: Array<{}>
}

const initialState: CounterState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },

    removeFromBasket: (state, action) => {
      // state.items -= 1
    },
  },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItems = (state: any) => state.basket.items;

export default basketSlice.reducer