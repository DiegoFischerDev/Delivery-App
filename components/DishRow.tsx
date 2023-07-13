import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Image } from 'react-native'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'

type Props = {
  id: number
  name: string
  description: string
  price: number
  image: string
}

export default function DishRow(props: Props) {

  const [isPressed, setIsPressed] = useState(false);

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
        style={{borderWidth: 1, borderColor: "gray"}}
        source={{uri: props.image}}
        className='h-20 w-20 rounded'
        />
      </View>
    </TouchableOpacity>

    {isPressed &&
      <View className='bg-white px-4'>
        <View className='flex-row items-center space-x-2 py-3'>
          <TouchableOpacity>
            <MinusCircleIcon
              color="#00CCBB"
              size={40}
            />
          </TouchableOpacity>
          <Text>0</Text>
          <TouchableOpacity>
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