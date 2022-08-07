import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoriesCard from './CategoriesCard'
import sanityClient, { urlFor } from '../../../sanity'

const Categories = () => {
    const [categories, setCatgories] = useState([]);
    useEffect(() => {
        sanityClient.fetch(`*[_type=="category"]`).then((data) => {
            setCatgories(data)
        })
    }, [])

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
            paddingTop: 10
        }} className=''>
            {
                categories.map(category => (
                    console.log(category),
                    <CategoriesCard
                        key={category._id}
                        title={category.title}
                        image={category.image}

                    />
                ))}
        </ScrollView>
    )
}

export default Categories