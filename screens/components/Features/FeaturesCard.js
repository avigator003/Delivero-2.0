import { View, Text, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { LocationMarkerIcon } from 'react-native-heroicons/outline'

const FeaturesCard = () => {
    return (
        <View className='mr-4 mt-4 bg-white rounded-lg'>
            <Image source={{ uri: "https://links.papareact.com/gn7" }} className='h-36 w-48 rounded-sm' />
            <View className='p-2'>
                <Text className='font-bold text-lg mb-1'>Nando's</Text>
                <View className='flex-row space-x-1.5 mb-1'>
                    <StarIcon color={"#A2B8A1"} size={15} />
                    <Text className='text-[#A2B8A1] text-xs'>4.2</Text>
                    <Text className='text-gray-500 text-xs'>offers</Text>
                </View>
                <View className='flex-row space-x-1.5 mb-1'>
                    <LocationMarkerIcon size={15} color={"gray"} />
                    <Text className='text-gray-500 text-xs'>Nearby</Text>
                    <Text className='text-gray-500 text-xs'>Clink Street</Text>
                </View>
            </View>
        </View >
    )
}

export default FeaturesCard