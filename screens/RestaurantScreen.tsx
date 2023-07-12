import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView
} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { UserIcon, ChevronDownIcon } from 'react-native-heroicons/outline'
import { TouchableOpacity } from 'react-native'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'

export default function RestaurantScreen() {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  type RouteParams = {
    imgUrl: string
    title: string
    rating: number
    genre: string
    address: string
    short_description: string
    dishes: object
    long: number
    lat: number
  }

  const route = useRoute()
  const {
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
  } = route.params as RouteParams

  return (
    <View className="relative">

      <TouchableOpacity
        className="absolute top-14 left-3 z-10"
        onPress={navigation.goBack}
      >
        <View className="w-10 h-10 bg-white items-center justify-center rounded-3xl border">
          <ArrowLeftIcon color="black" size={20} />
        </View>
      </TouchableOpacity>

      <View className='relative'>
        <Image
          source={{
            uri: imgUrl
          }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <View className='absolute -bottom-7 left-0 w-full items-center justify-center'>
          <View className='rounded-xl bg-gray-100 px-4 py-2 '>
            <Text className='text-xl'>{title}</Text>
          </View>
        </View>
      </View>

      <ScrollView>

      </ScrollView>

    </View>
  )
}
