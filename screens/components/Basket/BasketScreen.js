import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BaseRouter, useNavigation } from '@react-navigation/native'
import BasketHeader from './BasketHeader'
import BasketItem from './BasketItem'
import { useSelector } from 'react-redux'
import { selectBasketItems } from '../../../redux/basketSlice'
import BasketFooter from './BasketFooter'

const BasketScreen = () => {

    const basketItems = useSelector(selectBasketItems);
    const [groupedBasketItems, setGroupedBasketItems] = useState([]);

    useMemo(() => {
        const groupedItems = basketItems.reduce((results, item) => {
            {
                (results[item.id] = results[item.id] || []).push(item);
                return results;
            }
        }, {});
        setGroupedBasketItems(groupedItems);
    }, [basketItems])



    return (
        <View className='flex-1 mt-4'>
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


            <ScrollView className='mt-3 bg-white p-3 divide-y' contentContainerStyle={{ paddingBottom: 100 }}>
                {
                    Object.entries(groupedBasketItems).map(([key, items]) => (
                        <BasketItem
                            itemsCount={items.length}
                            image={items[0]?.image}
                            name={items[0]?.title}
                            price={items[0].price}
                            id={key}

                        />
                    ))}

            </ScrollView>

            <View className='relative'>
                <BasketFooter />
            </View>
        </View>
    )
}

export default BasketScreen