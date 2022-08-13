import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketTotal } from '../../../redux/basketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketFooter = () => {
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal);
    return (
        <View className='p-5 bg-white mt-5 rounded-s space-y-4'>
            <View className='flex-row justify-between'>
                <Text className='text-gray-500 text-xs'>Subtotal</Text>
                <Text className='text-gray-500 text-xs'>$ {basketTotal}</Text>
            </View>
            <View className='flex-row justify-between'>
                <Text className='text-gray-500 text-xs'>Delivery Fee</Text>
                <Text className=' text-gray-500  text-xs'>$ 5.99</Text>
            </View>
            <View className='flex-row justify-between'>
                <Text className='font-bold'>Order Total</Text>
                <Text className='font-bold text-sm'>$ {(basketTotal + 5.99).toFixed(2)}</Text>
            </View>

            <TouchableOpacity className='bg-[#4B9E9D] p-3 rounded-lg items-center' onPress={() => navigation.navigate('PreparingOrderScreen')}>
                <Text className='text-white font-bold text-base'>Place Order</Text>
            </TouchableOpacity>

        </View>
    )
}

export default BasketFooter