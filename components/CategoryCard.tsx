import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

type Props = {
  imgUrl: string
  title?: string
}

export default function CategoryCard(props: Props) {
  return (
    <TouchableOpacity className='mr-2 relative grayscale-[50%] pb-5'>
      <Image
      source={{
        uri: props.imgUrl
      }}
      className='h-20 w-20 rounded'
      />
      <Text className='absolute -bottom-0 left-1 text-black'>{props.title}</Text>
    </TouchableOpacity>
  )
}