import { createSlice } from '@reduxjs/toolkit'

type ItemType = {
  id: number
  name: string
  description: string
  price: number
  image: string
}

type BasketType = {
  items: Array<ItemType>
}

const initialState: BasketType = {
  items: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {

    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },

    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item: ItemType) => item.id === action.payload.id)

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

export default basketSlice.reducer
