import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'


const CategoriesCard = () => {
    return (
        <TouchableOpacity className='relative mr-3'>
            <Image source={{ uri: "https://links.papareact.com/gn7" }} className='h-20 w-20 rounded' />
            <Text className="absolute bottom-1 left-1 text-white font-bold">Offers</Text>
        </TouchableOpacity>
    )
}

export default CategoriesCard