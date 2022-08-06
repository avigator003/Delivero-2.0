import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const BasketItem = () => {
    return (
        <View className='flex-row my-3'>
            <View className='flex-1 flex-row items-center space-x-4'>
                <Text className='text-[#00CCBB] font-bold text-sm'> 1 X</Text>
                <Image source={{ uri: "https://links.papareact.com/wru" }} className='h-7 w-7 rounded-full bg-gray-300 p-4' />
                <Text className='text-base font-semibold'>Peri Peri Nuts</Text>
            </View>
            <View className='flex-row items-center space-x-4'>
                <Text className='text-gray-400 text-xs font-semibold'>$ 3.75</Text>
                <TouchableOpacity className='items-center'>
                    <Text className='text-[#00CCBB]'>Remove</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BasketItem