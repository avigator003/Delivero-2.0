import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const BascetIcon = () => {
    const navigation = useNavigation();
    return (
        <View className='absolute  bottom-10 w-full z-50'>
            <TouchableOpacity className='flex-row justify-between p-3 items-center bg-[#00CCBB] rounded-lg mx-5' onPress={() => navigation.navigate("Basket")}>
                <Text className='bg-[#01A296] p-2 px-3 text-white text-base font-semibold'>8</Text>
                <Text className='font-semibold text-white text-base'>View Basket</Text>
                <Text className='font-semibold text-white text-base'>$ 55.55</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BascetIcon