import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { urlFor } from '../../../sanity'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromBasket, selectBasketItemsWithId } from '../../../redux/basketSlice'

const BasketItem = (props) => {
    const { id, itemsCount, name, image, price } = props

    const dispatch = useDispatch();


    const removeItemFromBasket = () => {
        console.log(id)
        dispatch(removeFromBasket({ id: id }))
    }
    return (
        <View className='flex-row border-b border-gray-200 py-4'>
            <View className='flex-1 flex-row items-center space-x-4'>
                <Text className='text-[#00CCBB] font-bold text-sm'> {itemsCount} X</Text>
                <Image source={{ uri: image ? urlFor(image).url() : "https://links.papareact.com/wru" }} className='h-7 w-7 rounded-full bg-gray-300 p-4' />
                <Text className='text-sm font-semibold flex-1'>{name}</Text>
            </View>
            <View className='flex-row items-center space-x-4'>
                <Text className='text-gray-400 text-xs font-semibold'>$ {price}</Text>
                <TouchableOpacity className='items-center' onPress={removeItemFromBasket}>
                    <Text className='text-[#00CCBB]'>Remove</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BasketItem