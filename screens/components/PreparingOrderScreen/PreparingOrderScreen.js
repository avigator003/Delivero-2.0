import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")
        }, 4000)
    }, [])
    return (
        <SafeAreaView className='flex-1 items-center bg-[#00CCBB]'>
            <Animatable.Image
                source={require('../../../assets/TwuB.gif')}
                animation="slideInUp"
                className='h-96 w-96 mb-24'
            />


            <Animatable.Text animation="slideInUp" className='text-white font-bold text-base my-10 text-center'>
                Waiting for Restaurant to confirm your order.
            </Animatable.Text>

            <Progress.Circle size={60} indeterminate={true} color={"white"} />
        </SafeAreaView>
    )
}

export default PreparingOrderScreen