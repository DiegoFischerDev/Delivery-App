import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../App'

type Props = {
  imgUrl: string
  title: string
  rating: number
  genre: string
  address: string
  short_description: string
  dishes: Array<{
    id: number;
    name: string;
    short_description: string;
    price: number;
    image: string;
  }>
  long: number
  lat: number
}

export default function RestaurantCard(props: Props) {
  const navigation = useNavigation<StackTypes>()

  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow rounded-lg mb-6"
      onPress={() => {
        navigation.navigate("Restaurant", {
          imgUrl: props.imgUrl,
          title: props.title,
          rating: props.rating,
          genre: props.genre,
          address: props.address,
          short_description: props.short_description,
          dishes: props.dishes,
          long: props.long,
          lat: props.lat,
        })
      }}
    >
      <Image
        source={{
          uri: props.imgUrl
        }}
        className="h-40 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{props.title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text>{props.rating}</Text> • {props.genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">
            Nearby • {props.address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
