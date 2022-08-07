import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeftIcon, LocationMarkerIcon } from 'react-native-heroicons/outline';
import { StarIcon } from 'react-native-heroicons/solid';
import RestaurantHeader from './RestaurantHeader';
import MenuCard from './MenuCard';
import BascetIcon from '../../common/BascetIcon';
import { useDispatch } from 'react-redux';

const RestaurantScreen = (props) => {
    const navigation = useNavigation();

    const { params: { id, title, description, image, address, rating, dishes } } = useRoute();


    return (
        <>
            <BascetIcon />
            <RestaurantHeader
                image={image}
                title={title}
                rating={rating}
                address={address}
                description={description}
            />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                paddingBottom: 100
            }} >
                <Text className='font-bold text-lg px-4 py-2.5'>Menu</Text>

                <View
                    className='p-4 bg-white'>
                    {
                        dishes.map(dish => (
                            <MenuCard
                                key={dish._id}
                                id={dish._id}
                                title={dish.name}
                                image={dish.image}
                                price={dish.price}
                                description={dish.short_description}
                            />
                        ))}
                </View>
            </ScrollView>
        </>
    )
}

export default RestaurantScreen