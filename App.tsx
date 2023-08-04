import { NavigationContainer } from '@react-navigation/native'
import {
  NativeStackNavigationProp,
  createNativeStackNavigator
} from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import RestaurantScreen from './screens/RestaurantScreen'
import { store } from './store'
import { Provider } from 'react-redux'
import BasketScreen from './screens/BasketScreen'
import PreparingOrderScreen from './screens/PreparingOrderScreen'
import DeliveryScreen from './screens/DeliveryScreen'

const Stack = createNativeStackNavigator()

type StackNavigation = {
  Home: undefined
  Restaurant: {
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
  Basket: undefined
  PreparingOrder: undefined
  Delivery: undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen
            name="Basket"
            component={BasketScreen}
            options={{ presentation: 'modal', headerShown: false }}
          />
          <Stack.Screen
            name="PreparingOrder"
            component={PreparingOrderScreen}
            options={{ presentation: 'fullScreenModal', headerShown: false }}
          />
          <Stack.Screen
            name="Delivery"
            component={DeliveryScreen}
            options={{ presentation: 'fullScreenModal', headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
