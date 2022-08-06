import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoriesCard from './CategoriesCard'

const Categories = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
            paddingTop: 10
        }} className=''>
            <CategoriesCard />
            <CategoriesCard />
            <CategoriesCard />
            <CategoriesCard />
            <CategoriesCard />
            <CategoriesCard />
        </ScrollView>
    )
}

export default Categories