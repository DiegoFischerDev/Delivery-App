import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import { restaurantsList } from '../api/restaurants_list'

type Props = {
  title: string
  description: string
  feature: "Sponsored" | "discount" | "near"
}

export default function FeaturedRow(props: Props) {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{props.title}</Text>
        <ArrowRightIcon color="gray" />
      </View>
      <Text className="text_xs text-gray-500 px-4">{props.description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurantsList.map((restaurant) => {
          if(props.feature === restaurant.feature)
          return (
            <RestaurantCard
            key={restaurant.id}
            imgUrl={restaurant.imgUrl}
            title={restaurant.title}
            rating={restaurant.rating}
            genre={restaurant.genre}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
          )
        })}

      </ScrollView>
    </View>
  )
}
