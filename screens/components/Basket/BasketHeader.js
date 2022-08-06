import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { XCircleIcon } from 'react-native-heroicons/solid'

const BasketHeader = () => {
    return (
        <View className='mt-5 bg-white p-3'>
            <View className='mt-2'>
                <Text className='text-center text-black font-bold text-xl'>Basket</Text>
                <Text className='text-center  text-gray-400 font-semibold text-sm'>Nando's</Text>
            </View>
            <TouchableOpacity className='justify-end absolute right-5 top-3'>
                <XCircleIcon color={"#00CCBB"} size={45} />
            </TouchableOpacity>


        </View>
    )
}

export default BasketHeader