import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { XCircleIcon } from 'react-native-heroicons/solid'
import * as Progress from 'react-native-progress'
import MapView, { Marker } from 'react-native-maps'
import { StackTypes } from '../App'

export default function DeliveryScreen() {
  const navigation = useNavigation<StackTypes>()

  const [showModal, setShowModal] = useState(false)

  const restaurant = useSelector(
    (state: RootState) => state.restaurant.restaurant
  )

  return (
    <View className="bg-[#2395b0] flex-1">
      <SafeAreaView className="z-40">
        {showModal && (
          <View className="bg-[#39a0ccac] w-screen h-screen absolute top-0 left-0 z-40 flex items-center justify-center ">
            <View className="w-[70vw] h-56 bg-white flex items-center justify-center shadow-lg rounded-md relative">
              <TouchableOpacity
                onPress={() => {
                  setShowModal(false)
                }}
                className="absolute right-5 top-5 "
              >
                <XCircleIcon color="gray" size={40} />
              </TouchableOpacity>

              <Text className="text-lg">Diego Fischer</Text>
              <Text className="text-gray-400">Web Developer</Text>

              <Text className="text-md text-[#2395b0] mt-7">Fone: +351 927 398 547</Text>
              <Text className="text-md text-[#2395b0]">Email: hello@diegofischer.dev</Text>
              <Text className="text-md text-[#2395b0]">Page: https://www.diegofischer.dev/</Text>
            </View>
          </View>
        )}

        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home')
            }}
          >
            <XCircleIcon color="white" size={40} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-30 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>

            <Image
              source={{
                uri: 'https://links.papareact.com/fls'
              }}
              className="h-20 w-20"
            />
          </View>

          <Progress.Bar color="#2395b0" indeterminate={true} />

          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#2395b0"
        />
      </MapView>

      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{
            uri: 'https://links.papareact.com/wru'
          }}
          className="h-12 w-12 p-4 ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Diego Fischer</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            setShowModal(true)
          }}
        >
          <Text className="text-[#2395b0] text-lg mr-5 font-bold">Call</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  )
}
