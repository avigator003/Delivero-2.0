import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import FeaturesCard from './FeaturesCard'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import sanityClient from '../../../sanity'

const Features = (props) => {
    const { id, title, description } = props

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        sanityClient.fetch(`
        *[_type=="featured" && _id==$id]{
            ...,
            restaurants[]->{
                ...,
                dishes[]->,
                  type->{
                    name
                  }
                },
            }[0]
        `, { id })
            .then((data) => {
                setRestaurants(data?.restaurants)
            })
    }, [])
    return (
        <View className='my-5'>
            <View className="flex-row">
                <View className='flex-1'>
                    <Text className='font-bold text-base'> {title}</Text>
                    <Text className='text-xs text-gray-400 ml-1'>{description}</Text>
                </View>
                <ArrowRightIcon size={16} color={"#7AC0B6"} />
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
                paddingTop: 10
            }} >
                {restaurants?.map(restaurant => (
                    <FeaturesCard
                        key={restaurant._id}
                        id={restaurant._id}
                        title={restaurant.name}
                        description={restaurant.short_description}
                        image={restaurant.image}
                        dishes={restaurant.dishes}
                        address={restaurant.address}
                        rating={restaurant.rating}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default Features