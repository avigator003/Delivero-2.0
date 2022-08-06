import { View, Text, Image } from 'react-native'
import React from 'react'
import { ArrowDownIcon, ChevronDownIcon, UserIcon } from 'react-native-heroicons/outline'

const Header = () => {
    return (
        <View className='flex-row space-x-3 items-center'>
            <Image source={{ uri: "https://links.papareact.com/wru" }} className='h-7 w-7 rounded-full bg-gray-300 p-4' />
            <View className='flex-1'>
                <Text className='font-serif text-xs text-gray-500'>Deliver now !</Text>
                <View className='flex-row items-center'>
                    <Text className='font-bold text-lg mr-2 items-center'>Current Location</Text>
                    <ChevronDownIcon size={16} color={"#7AC0B6"} />
                </View>

            </View>
            <UserIcon size={30} color={"#7AC0B6"} />
        </View>
    )
}

export default Header;