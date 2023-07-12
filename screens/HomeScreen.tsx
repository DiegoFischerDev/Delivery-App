import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { UserIcon, ChevronDownIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'

export default function HomeScreen() {

  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <View className="flex-row items-center">
            <Text className="font-bolde text-xl">Current Location</Text>
            <ChevronDownIcon size={20} color="gray" />
          </View>
        </View>

        <UserIcon size={35} color="gray" />
      </View>

      <View className="flex-row items-center space-x-2 mx-4 pb-3">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={25} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="gray" size={35} />
      </View>

      <ScrollView>
        <Categories />

        <View className='mb-40 mt-4'>
          <FeaturedRow
            title="Sponsored"
            description="Paid placements our parteners"
            feature="Sponsored"
          />
          <FeaturedRow
            title="Tasty Discounts"
            description="Everyone's been enjoying these juicy discounts!"
            feature="discount"
          />
          <FeaturedRow
            title="Offers near you!"
            description="Why not support your local restaurant tonight?"
            feature="near"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
