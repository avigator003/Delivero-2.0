import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BaseRouter } from '@react-navigation/native'
import BasketHeader from './BasketHeader'
import BasketItem from './BasketItem'

const BasketScreen = () => {
    return (
        <SafeAreaView>
            <BasketHeader />

            <View className='mt-3 bg-white p-3 flex-row items-center'>
                <View className='flex-1 flex-row items-center space-x-4'>
                    <Image source={{ uri: "https://links.papareact.com/wru" }} className='h-7 w-7 rounded-full bg-gray-300 p-4' />
                    <Text>Deliver in 50-75 min</Text>
                </View>

                <TouchableOpacity className='items-center'>
                    <Text className='text-[#00CCBB]'>Change</Text>
                </TouchableOpacity>
            </View>


            <ScrollView className='mt-3 bg-white p-3' contentContainerStyle={{ paddingBottom: 100 }}>
                <BasketItem />
                <BasketItem />
                <BasketItem />
                <BasketItem />
                <BasketItem />
                <BasketItem />
                <BasketItem />
                <BasketItem />
                <BasketItem />
                <BasketItem />
                <BasketItem />
                <BasketItem />
                <BasketItem />
                <BasketItem />
                <BasketItem />
                <BasketItem />
            </ScrollView>

        </SafeAreaView>
    )
}

export default BasketScreen