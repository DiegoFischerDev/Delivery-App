import React from 'react'
import { ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'
import { categoriesList } from '../api/categories_list'

export default function categories() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
      }}
    >
      {categoriesList.map((category) => {
        return (
          <CategoryCard
          key={category.id}
          imgUrl={category.imgUrl}
          title={category.title}
        />
        )
      })}
    </ScrollView>
  )
}
