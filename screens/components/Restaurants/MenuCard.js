import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../../../sanity';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket, selectBasketItems, selectBasketItemsWithId } from '../../../redux/basketSlice';
import { useNavigation } from '@react-navigation/native';
import { addToBasket } from '../../../redux/basketSlice'

const MenuCard = (props) => {
    const { id, title, description, image, price } = props

    const dispatch = useDispatch();
    const items = useSelector((state) => selectBasketItemsWithId(state, id));
    const navigation = useNavigation()
    const [isPressed, setIsPressed] = useState(false);


    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    const addItemToBasket = () => {
        dispatch(addToBasket({ id, title, description, image, price }))
    }

    const removeItemFromBasket = () => {
        if (!items.length > 0) return;
        dispatch(removeFromBasket({ id }))
    }


    return (
        <>
            <TouchableOpacity className={`flex-row items-center border-b border-gray-200 py-5 ${isPressed && "border-b-0"} `} onPress={() => {
                setIsPressed(!isPressed)
            }}>
                <View className='flex-1 pr-2'>
                    <Text className='text-lg font-semibold '>{title}</Text>
                    <Text className='text-sm text-gray-400 mt-2'>{description}</Text>
                    <Text className='text-sm text-gray-400 mt-2'>$ {price}</Text>
                </View>

                <View>
                    <Image source={{ uri: image ? urlFor(image).url() : "https://links.papareact.com/gn7" }} className='h-20 w-20 rounded p-4' />
                </View>
            </TouchableOpacity>

            {isPressed &&
                <View className='items-center flex-row space-x-2 py-3'>
                    <TouchableOpacity onPress={removeItemFromBasket} disabled={!items.length} >
                        <MinusCircleIcon size={40} color={items.length > 0 ? "#00CCBB" : "gray"} />
                    </TouchableOpacity>
                    <Text>{items.length}</Text>
                    <TouchableOpacity onPress={addItemToBasket}>
                        <PlusCircleIcon size={40} color={"#00CCBB"} />
                    </TouchableOpacity>
                </View>
            }
        </ >

    )
}

export default MenuCard;