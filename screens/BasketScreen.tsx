import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../App'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { Image } from 'react-native'
import { removeFromBasket } from '../features/basketSlice'

export default function BasketScreen() {
  type ItemType = {
    id: number
    name: string
    description: string
    price: number
    image: string
  }

  const navigation = useNavigation<StackTypes>()
  const restaurant = useSelector(
    (state: RootState) => state.restaurant.restaurant
  )
  const items = useSelector((state: RootState) => state.basket.items)
  const dispatch = useDispatch()
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState<Array<Array<ItemType>>>([])
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    const groupedItems = items.reduce((results: any, item) => {
      (results[item.id] = results[item.id] || []).push(item)
      return results
    }, {})

    setGroupedItemsInBasket(Object.values(groupedItems))

    let calcSubTotal: number = 0
    items.map((item) => calcSubTotal = calcSubTotal + item.price)
    setSubTotal(calcSubTotal)
  }, [items])

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="pb-5 bg-white border-b relative border-gray-200 bg-wite">
          <Text className="text-lg font-bold text-center">Basket</Text>
          <Text className="text-center">{restaurant.title}</Text>
        </View>

        <TouchableOpacity
          onPress={navigation.goBack}
          className="rounded-full bg-gray-100 absolute -top-1 right-5"
        >
          <XCircleIcon color="#00CCBB" height={50} width={50} />
        </TouchableOpacity>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{ uri: 'https://links.papareact.com/wru' }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className='divide-y divide-gray-200'>
          {groupedItemsInBasket.map((group) => (
            <View key={group[0]?.id} className='flex-row items-center space-x-3 bg-white py-2 px-5'>
              <Text className='text-base text-[#00CCBB]'>{group.length} x</Text>
              <Image 
                source={{ uri: group[0]?.image }}
                className='h-12 w-12 rounded-full'
              />
              <Text className='flex-1 text-base'>{group[0]?.name}</Text>

              <Text className='text-base'>€ {group[0]?.price}</Text>

              <TouchableOpacity>
                <Text className='text-[#00CCBB] text-xs' onPress={() => {dispatch(removeFromBasket({id: group[0]?.id}))}}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className='p-5 bg-white shadow-lg space-y-3'>
          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>SubTotal</Text>
            <Text className='text-gray-400'>€ {subTotal}</Text>
          </View>

          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Delivery Fee</Text>
            <Text className='text-gray-400'>€ 2.99</Text>
          </View>

          <View className='flex-row justify-between'>
            <Text className=''>Order Total</Text>
            <Text className='font-extrabold'>€ {(subTotal + 2.99).toFixed(2)}</Text>
          </View>

          <TouchableOpacity onPress={()=>{navigation.navigate("PreparingOrder")}} className='rounded-lg bg-[#00CCBB] p-4'>
            <Text className='text-center text-white text-lg font-bold'>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
