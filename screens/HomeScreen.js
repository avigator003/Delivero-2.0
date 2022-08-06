import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useLayoutEffect } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './common/Header'
import SearchbarHeader from './common/SearchbarHeader'

const HomeScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <SafeAreaView className='mx-4 my-4 px-2'>
            <Header />
            <SearchbarHeader />
        </SafeAreaView>
    )
}

export default HomeScreen