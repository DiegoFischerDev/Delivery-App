import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Image } from 'react-native'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from '../features/basketSlice'
import { createSelector } from '@reduxjs/toolkit'

type Props = {
  id: number
  name: string
  description: string
  price: number
  image: string
}


export default function DishRow(props: Props) {

// Selector to retrieve specific item from the basket
const selectSpecificItem: any = createSelector<any, any>((state: any) => state, (_:any, id:any) => id, selectBasketItemsWithId);

  const [isPressed, setIsPressed] = useState(false);
  const specificItem = useSelector((state) => selectSpecificItem(state, props.id))
  const dispatch = useDispatch();

  function AddItemToBasket(){
    dispatch(addToBasket(props))
  }

  function RemoveItemFromBasket(){
    if (specificItem.length > 0) {
      dispatch(removeFromBasket(props))
    }
    
  }

  return (
    <>
    <TouchableOpacity onPress={()=>{setIsPressed(!isPressed)}} className={`bg-white border p-4 border-gray-200 flex-row ${isPressed && "border-b-0"}`}>
      <View className='flex-1 pr-2'>
        <Text className='text-lg mb-1'>{props.name}</Text>
        <Text className='text-gray-400'>{props.description}</Text>
        <Text className='text-gray-400 mt-2'>€ {props.price}</Text>
      </View>
      <View>
        <Image
        source={{uri: props.image}}
        className='h-20 w-20 rounded border border-gray-500'
        />
      </View>
    </TouchableOpacity>

    {isPressed &&
      <View className='bg-white px-4'>
        <View className='flex-row items-center space-x-2 py-3'>
          <TouchableOpacity onPress={RemoveItemFromBasket}>
            <MinusCircleIcon
              color={specificItem.length > 0 ? "#00CCBB" : "gray"}
              size={40}
            />
          </TouchableOpacity>
          <Text>{specificItem.length}</Text>
          <TouchableOpacity onPress={AddItemToBasket}>
            <PlusCircleIcon
              color="#00CCBB"
              size={40}
            />
          </TouchableOpacity>
        </View>

      </View>
    }
    
    </>
  )
}
