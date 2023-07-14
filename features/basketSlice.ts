import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type ItemType = {
  id: number
  name: string
  description: string
  price: number
  image: string
}

export interface BasketType {
  items: Array<ItemType>
}

const initialState: BasketType = {
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

      if (index >= 0) {
        let newBasket = [...state.items]
        newBasket.splice(index, 1)
        state.items = newBasket
      } else {
        console.warn(`Can not remove product (id: ${action.payload.id}) as it is not in basket!`)
      }
    }
    
  }
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

// export const selectBasketItems = (state: { basket: BasketType }) =>
//   state.basket.items

export const selectBasketItemsWithId = (state: { basket: BasketType }, id: number) =>
  state.basket.items.filter((item) => item.id === id)

export default basketSlice.reducer
