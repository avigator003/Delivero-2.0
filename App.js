import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';
import RestaurantScreen from './screens/components/Restaurants/RestaurantScreen';
import HomeScreen from './screens/components/Home/HomeScreen';
import BasketScreen from './screens/components/Basket/BasketScreen';
import { Provider } from 'react-redux';
import { store } from './store'
import PreparingOrderScreen from './screens/components/PreparingOrderScreen/PreparingOrderScreen';
import Delivery from './screens/components/Delivery/Delivery';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="Basket" component={BasketScreen} options={{
              headerShown: false, animation: 'slide_from_bottom'
            }} />
            <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Delivery" component={Delivery} options={{ headerShown: false }} />

          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
