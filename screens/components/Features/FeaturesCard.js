import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { LocationMarkerIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { urlFor } from '../../../sanity'

const FeaturesCard = (props) => {
    const navigation = useNavigation();
    const { id, title, description, image, address, rating, dishes } = props


    const handleNavigation = () => {
        console.log(id)
        navigation.navigate("Restaurant", { id, title, description, image, address, rating, dishes });
    }
    return (
        <TouchableOpacity className='mr-4 mt-4 bg-white rounded-lg' onPress={() => handleNavigation()}>
            <Image source={{ uri: image ? urlFor(image).url() : "https://links.papareact.com/gn7" }} className='object-fill h-36 w-52 rounded-sm ' />
            <View className='p-2'>
                <Text className='font-bold text-lg mb-1'>{title}</Text>
                <Text className='text-xs mb-2 text-gray-400'>{description}</Text>
                <View className='flex-row space-x-1.5 mb-1'>
                    <StarIcon color={"#A2B8A1"} size={15} />
                    <Text className='text-[#A2B8A1] text-xs'>{rating}</Text>
                    <Text className='text-gray-500 text-xs'>offers</Text>
                </View>
                <View className='flex-row space-x-1.5 mb-1'>
                    <LocationMarkerIcon size={15} color={"gray"} />
                    <Text className='text-gray-500 text-xs'>{address}</Text>
                </View>
            </View>
        </TouchableOpacity >
    )
}

export default FeaturesCard