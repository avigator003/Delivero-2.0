import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import FeaturesCard from './FeaturesCard'
import { ArrowRightIcon } from 'react-native-heroicons/outline'

const Features = () => {
    return (
        <View className='my-5'>
            <View className="flex-row">
                <View className='flex-1'>
                    <Text className='font-bold text-base'> Offers Near you</Text>
                    <Text className='text-xs text-gray-400 ml-1'>Why not support your local restaurant tonight!</Text>
                </View>
                <ArrowRightIcon size={16} color={"#7AC0B6"} />
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
                paddingTop: 10
            }} >
                <FeaturesCard />
                <FeaturesCard />
                <FeaturesCard />
                <FeaturesCard />
                <FeaturesCard />
                <FeaturesCard />
            </ScrollView>
        </View>
    )
}

export default Features