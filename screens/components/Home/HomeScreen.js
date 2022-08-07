import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../common/Header'
import SearchbarHeader from '../../common/SearchbarHeader'
import Categories from '../Categories/Categories'
import Features from '../Features/Features'
import sanityClient from '../../../sanity'
const HomeScreen = () => {

    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    useEffect(() => {
        sanityClient.fetch(`
        *[_type=="featured"]{
            ...,
            restaurants[]->{
                ...,
                dishes[]->{

                }
            }
        }
        `).then((data) => {
            setFeaturedCategories(data)
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
                {
                    featuredCategories?.map(category => (
                        <Features title={category.name} description={category.short_description} id={category._id} />
                    ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen