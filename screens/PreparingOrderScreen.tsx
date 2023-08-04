import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../App'


export default function PreparingOrderScreen() {

  const navigation = useNavigation<StackTypes>()

  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate("Delivery")
    }, 5000)
  },[])

  return (
    <SafeAreaView className="bg-[#2395b0] flex-1 justify-center items-center">
      <Animatable.Image
        source={require('../assets/panela.gif')}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color='white' />

    </SafeAreaView>
  )
}
