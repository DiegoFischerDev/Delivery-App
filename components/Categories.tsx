import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'

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
      <CategoryCard
        imgUrl="https://img.freepik.com/fotos-gratis/variedade-plana-com-deliciosa-comida-brasileira_23-2148739179.jpg?w=2000"
        title="Meals"
      />
      <CategoryCard
        imgUrl="https://i0.wp.com/melhoresmomentosdavida.com/wp-content/uploads/2022/07/pratos-tipicos-dos-estados-unidos.jpg?fit=845%2C527&ssl=1"
        title="Burguer"
      />
      <CategoryCard
        imgUrl="https://www.sabornamesa.com.br/media/k2/items/cache/d32703e4d6167ce27e1a9881230505a2_XL.jpg"
        title="Sushi"
      />
      <CategoryCard
        imgUrl="https://www.cocinacaserayfacil.net/wp-content/uploads/2020/03/Platos-de-comida-que-pides-a-domicilio-y-puedes-hacer-en-casa.jpg"
        title="Pizza"
      />
      <CategoryCard
        imgUrl="https://cdn.deliway.com.br/blog/base/f1b/077/594/comida-tipica-do-norte.jpg"
        title="Dessert"
      />
      <CategoryCard
        imgUrl="https://www.acasaencantada.com.br/wp-content/uploads/2021/03/Comida-vegana-alface-grao-de-bico-tomatinhos-cereja-abacate-e-folhas-verdes-1.webp"
        title="Salad"
      />
    </ScrollView>
  )
}
