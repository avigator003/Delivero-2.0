import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';
import RestaurantScreen from './screens/components/Restaurants/RestaurantScreen';
import HomeScreen from './screens/components/Home/HomeScreen';
import BasketScreen from './screens/components/Basket/BasketScreen';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="Basket" component={BasketScreen} options={{
            headerShown: false, animation: 'slide_from_bottom'
          }} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
