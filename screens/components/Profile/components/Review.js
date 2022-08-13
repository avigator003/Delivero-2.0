import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
const Review = () => {

    return (
        <View className='flex-1 items-center'>
            < Animatable.Image
                source={require('../../../../assets/review.png')}
                animation="slideInUp"
                className='h-36 w-36 mt-12 items-center'
            />
        </View >
    )
}

export default Review