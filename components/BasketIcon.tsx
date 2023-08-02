import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { useNavigation } from '@react-navigation/native'

export default function BasketIcon() {
  const items = useSelector((state: RootState) => state.basket.items)
  const navigation = useNavigation()

  const [basketPriceTotal, setBasketPriceTotal] = useState(0)

  useEffect(() => {
    let total: number = 0
    items.map(item => {
      total = total + item.price
    })
    setBasketPriceTotal(total)
  }, [items])

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity className='mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1'>
        <Text className='text-white font-extrabold text-lg bg-[#01A296] py-1 px-2'>{items.length}</Text>
        <Text className='flex-1 text-white font-extrabold text-lg text-center'>View Basket</Text>
        <Text className='text-white font-extrabold text-lg'>€ {basketPriceTotal}</Text>
      </TouchableOpacity>
    </View>
  )
}
