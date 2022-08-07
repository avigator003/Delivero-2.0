import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XCircleIcon } from 'react-native-heroicons/outline'
import * as Progress from 'react-native-progress'
import MapView, { Marker } from 'react-native-maps'
const Delivery = () => {
    return (
        <View className='bg-[#00CCBB] flex-1 '>
            <SafeAreaView className='flex-row justify-between items-center p-4'>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <XCircleIcon color={"white"} size={40} />
                </TouchableOpacity>
                <Text className='text-white font-semibold text-base'>Order help</Text>
            </SafeAreaView>


            <View className='flex-row items-center bg-white p-4 rounded-lg justify-between mt-5 z-50 mx-5'>
                <View className='space-y-2 flex-1'>
                    <Text className='text-gray-400'>Estimated Arrival</Text>
                    <Text className='font-bold text-3xl'>45-55 Minutes</Text>
                    <Progress.Bar size={30} color={'#00CCBB'} indeterminate={true} />
                    <Text className='text-gray-400 text-xs'>Your order at Nando's Restaurant is being prepared</Text>
                </View>
                <Image source={{ uri: "https://links.papareact.com/fls" }} className='h-20 w-20' />
            </View>


            <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}
                className='flex-1 -mt-10 z-0'
                mapType='mutedStandard'
            >
                <Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    title={"Nando's"}
                    description={"Nondo's restaurant"}
                    identifier={"origin"}
                    pinColor={"#00CCBB"}
                />
            </MapView>


            <SafeAreaView className='bg-white px-4 pb-4 flex-row space-x-4 items-center'>
                <Image source={{ uri: "https://links.papareact.com/wru" }} className='h-7 w-7 rounded-full bg-gray-300 p-4 items-center' />

                <View className='flex-1 p-2 space-y-1'>
                    <Text className='font-bold text-base'>Akshat Lakshkar</Text>
                    <Text className='text-gray-400 text-sm'>Your Rider</Text>
                </View>
                <TouchableOpacity className='items-center'>
                    <Text className='text-[#00CCBB] text-xl pr-4'>Call</Text>
                </TouchableOpacity>
            </SafeAreaView>

        </View>
    )
}

export default Delivery