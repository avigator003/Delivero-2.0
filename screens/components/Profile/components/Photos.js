import { View, Text } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';

const Photos = () => {

    return (
        <View className='flex-1 items-center'>
            < Animatable.Image
                source={require('../../../../assets/photos.png')}
                animation="slideInUp"
                className='h-36 w-36 mt-12 items-center'
            />
        </View >
    )
}

export default Photos