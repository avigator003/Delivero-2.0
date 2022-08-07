import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowLeftIcon, StarIcon } from 'react-native-heroicons/solid'
import { LocationMarkerIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { urlFor } from '../../../sanity'

const RestaurantHeader = (props) => {
    const navigation = useNavigation();

    const { title, rating, address, description, image } = props


    return (
        <>
            <View className='relative'>
                <Image source={{ uri: image ? urlFor(image).url() : "https://links.papareact.com/gn7" }} className='w-full h-56 bg-gray-300 p-4' />
                <TouchableOpacity className='absolute top-14 left-5 bg-gray-50 rounded-full p-2' onPress={() => {
                    navigation.goBack()
                }}>
                    <ArrowLeftIcon size={23} color={"#00CCBB"} />
                </TouchableOpacity>
            </View>
            <View className='p-4 bg-white'>
                <Text className='font-bold text-2xl'>{title}</Text>
                <View className='flex-row space-x-1.5 mt-1'>
                    <StarIcon color={"#A2B8A1"} size={15} />
                    <Text className='text-[#A2B8A1] text-xs'>{rating}</Text>
                    <Text className='text-gray-500 text-xs'>offers</Text>
                    <LocationMarkerIcon size={15} color={"gray"} />
                    <Text className='text-gray-500 text-xs'>{address}</Text>
                </View>
            </View>
            <Text className='px-4 text-xs text-gray-400 font-medium bg-white pb-4'>{description}</Text>
        </>
    )
}

export default RestaurantHeader