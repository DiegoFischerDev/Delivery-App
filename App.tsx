import { NavigationContainer } from '@react-navigation/native'
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import RestaurantScreen from './screens/RestaurantScreen'

const Stack = createNativeStackNavigator();

type StackNavigation = {
  Home: undefined
  Restaurant: {
    imgUrl: string
    title: string
    rating: number
    genre: string
    address: string
    short_description: string
    dishes: object
    long: number
    lat: number
  }
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
