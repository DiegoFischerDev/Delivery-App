import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native"


export default function Home() {

  const navigation = useNavigation();

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: false,
    })
  }, []);

  return (
    <SafeAreaView>
      <Text className='text-dark text-3xl ml-5'>Home akiiii</Text>

      {/* header */}
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <Image
          source={{uri: 'https://links.papareact.com/wru'}}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />
        <View>
          <Text className='font-bold text-grey-400 text-xs'>Deliver Now!</Text>
          <Text className='font-bolde text-xl'>Current Location</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
