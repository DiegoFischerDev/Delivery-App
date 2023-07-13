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
import {
  UserIcon,
  ChevronDownIcon,
  QuestionMarkCircleIcon
} from 'react-native-heroicons/outline'
import { TouchableOpacity } from 'react-native'
import {
  ArrowLeftIcon,
  ArrowLongLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon
} from 'react-native-heroicons/solid'
import DishRow from '../components/DishRow'

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
    dishes: Array<{
      id: number
      name: string
      short_description: string
      price: number
      image: string
    }>
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
      <ScrollView className="relative">
        <Image
          source={{
            uri: imgUrl
          }}
          className="w-full h-56 p-4"
        />

        <TouchableOpacity
          className="absolute top-14 left-3 z-10"
          onPress={navigation.goBack}
        >
          <View className="w-10 h-10 bg-white items-center justify-center rounded-3xl border border-[#00CCBB]">
            <ArrowLeftIcon color="#00CCBB" size={20} />
          </View>
        </TouchableOpacity>

        <View className="bg-white">
          <View className="px-4 pt-3">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-end space-x-1">
                <StarIcon size={20} color="#00CCBB" opacity={0.5} />
                <Text className="text-[#00CCBB] text-s">{rating}</Text>
                <Text className="text-gray-500 text-s">∙ {genre}</Text>
              </View>

              <View className="flex-row items-end space-x-2">
                <MapPinIcon size={20} color="gray" opacity={0.5} />
                <Text className="text-gray-500 text-xs">
                  Nearby ∙ {address}
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon size={20} color="gray" opacity={0.6} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy?
            </Text>
            <ChevronRightIcon color="gray" />
          </TouchableOpacity>
        </View>

        <View className="pb-10">
          <Text className="pt-6 mb-3 font-bold px-4 text-xl">Menu</Text>

          {dishes.map(dish => {
            return (
              <DishRow
                key={dish.id}
                id={dish.id}
                name={dish.name}
                description={dish.short_description}
                price={dish.price}
                image={imgUrl}
              />
            )
          })}
        </View>
      </ScrollView>
  )
}
