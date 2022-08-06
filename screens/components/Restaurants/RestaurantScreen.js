import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon, LocationMarkerIcon } from 'react-native-heroicons/outline';
import { StarIcon } from 'react-native-heroicons/solid';
import RestaurantHeader from './RestaurantHeader';
import MenuCard from './MenuCard';

const RestaurantScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <>
            <RestaurantHeader />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                paddingBottom: 3
            }} >
                <Text className='font-bold text-lg px-4 py-2.5'>Menu</Text>

                <View
                    className='p-4 bg-white'>
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                </View>
            </ScrollView>
        </>
    )
}

export default RestaurantScreen