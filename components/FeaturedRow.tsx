import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

type Props = {
  id: number
  title: string
  description: string
  featuredCategory: string
}

export default function FeaturedRow(props: Props) {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{props.title}</Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>
      <Text className='text_xs text-gray-500 px-4'>{props.description}</Text>
      <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15
      }}
      showsHorizontalScrollIndicator={false}
      className='pt-4'
      >
       <RestaurantCard 
         id= {1}
         imgUrl= "https://img.freepik.com/fotos-gratis/variedade-plana-com-deliciosa-comida-brasileira_23-2148739179.jpg?w=2000"
         title= "Yo! Sushi"
         rating= {4.5}
         genre= "Japonese"
         adress= "123 Main St"
         short_description= "This is a test description"
         dishes= {[]}
         long= {20}
         lat= {30}
         /> 
                <RestaurantCard 
         id= {1}
         imgUrl= "https://i0.wp.com/melhoresmomentosdavida.com/wp-content/uploads/2022/07/pratos-tipicos-dos-estados-unidos.jpg?fit=845%2C527&ssl=1"
         title= "Yo! Sushi"
         rating= {4.5}
         genre= "Japonese"
         adress= "123 Main St"
         short_description= "This is a test description"
         dishes= {[]}
         long= {20}
         lat= {30}
         /> 
                <RestaurantCard 
         id= {1}
         imgUrl= "https://cdn.deliway.com.br/blog/base/f1b/077/594/comida-tipica-do-norte.jpg"
         title= "Yo! Sushi"
         rating= {4.5}
         genre= "Japonese"
         adress= "123 Main St"
         short_description= "This is a test description"
         dishes= {[]}
         long= {20}
         lat= {30}
         /> 
      </ScrollView>
    </View>
  )
}