import { createSlice } from '@reduxjs/toolkit'

type dishesType = {
  id: number
  name: string
  short_description: string
  price: number
  image: string
}

type restaurantType = {
  restaurant: {
    id: number
    feature: string
    imgUrl: string
    title: string
    rating: number
    genre: string
    address: string
    short_description: string
    long: number
    lat: number
    dishes: Array<dishesType>
  }
}

const initialState: restaurantType = {
  restaurant: {
    id: 0,
    feature: '',
    imgUrl: '',
    title: '',
    rating: 0,
    genre: '',
    address: '',
    short_description: '',
    long: 0,
    lat: 0,
    dishes: []
  }
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload
    },
  }
})

export const { setRestaurant } = restaurantSlice.actions

export default restaurantSlice.reducer
