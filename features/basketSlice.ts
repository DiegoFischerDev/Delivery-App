import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type ItemType = {
  id: number
  name: string
  description: string
  price: number
  image: string
}

export interface CounterState {
  items: Array<{}>
}

const initialState: CounterState = {
  items: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<ItemType>) => {
      state.items = [...state.items, action.payload]
    },

    removeFromBasket: (state, action: PayloadAction<ItemType>) => {
      const index = state.items.findIndex((item: any) => item.id === action.payload.id)

      let newBasket = [...state.items]

      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(`Can not remove product (id: ${action.payload.id}) as it is not in basket!`)
      }

      state.items = newBasket
    }
  }
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItems = (state: { basket: CounterState }) =>
  state.basket.items

export const selectBasketItemsWithId = (state: any, id: number) =>
  state.basket.items.filter((item: ItemType) => item.id === id)

export default basketSlice.reducer
