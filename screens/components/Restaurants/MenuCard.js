import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../../../sanity';

const MenuCard = (props) => {

    const [isPressed, setIsPressed] = useState(false);

    const { id, title, description, image, price } = props


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
                    <TouchableOpacity>
                        <MinusCircleIcon size={40} color={"#00CCBB"} />
                    </TouchableOpacity>
                    <Text>0</Text>
                    <TouchableOpacity>
                        <PlusCircleIcon size={40} color={"#00CCBB"} />
                    </TouchableOpacity>
                </View>
            }
        </ >

    )
}

export default MenuCard;