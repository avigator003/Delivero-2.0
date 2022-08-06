import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useLayoutEffect } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './common/Header'
import SearchbarHeader from './common/SearchbarHeader'
import Categories from './components/Categories/Categories'
import Features from './components/Features/Features'

const HomeScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <SafeAreaView className='my-4 px-4'>
            <Header />
            <SearchbarHeader />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                paddingBottom: 100
            }}>
                <Categories />
                <Features />
                <Features />
                <Features />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen