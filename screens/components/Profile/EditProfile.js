import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import EditProfileHeader from './components/EditProfileHeader';
import { LocationMarkerIcon } from 'react-native-heroicons/outline';
import { BookOpenIcon } from 'react-native-heroicons/solid';
import TabViewExample from './components/TabViewExample';
import ReviewAndOrders from './components/ReviewAndOrders';

const EditProfile = (props) => {
    const navigation = useNavigation();


    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ marginBottom: -300 }} >
                <EditProfileHeader />

                <View className='items-center mt-14 space-y-2'>
                    <Text className='font-semibold text-lg'>Akshat</Text>
                    <View className='flex-row space-x-2'>
                        <Text className='font-semibold text-slate-600 text-xs'>0 Followers</Text>
                        <Text className='font-bold text-black'>.</Text>
                        <Text className='font-semibold text-slate-600 text-xs'>0 Following</Text>
                    </View>
                    <View className='flex-row space-x-2 items-center'>
                        <LocationMarkerIcon size={15} color="gray" />
                        <Text>Indore</Text>
                    </View>
                </View>

                <View className='items-center mt-4'>
                    <View className='flex-row space-x-4'>
                        <Text className='border-gray-300 border-[0.75px] p-[6.75px] rounded-md text-xs font-semibold'>Add Review</Text>
                        <Text className='border-gray-300 border-[0.75px] p-[6.75px] rounded-md text-xs font-semibold'>Add Photo</Text>
                        <Text className='border-gray-300 border-[0.75px] p-[6.75px] rounded-md text-xs font-semibold'>Edit Profile</Text>
                    </View>
                </View>



                <View className='items-center mt-8 mb-8 space-y-2'>
                    <View className='bg-gray-200 rounded-lg p-4'>
                        <BookOpenIcon color={"#00CCBB"} size={35} />
                    </View>
                    <Text className='font-semibold text-gray-500 text-sm'>My Orders</Text>
                </View>
                <View className='h-96 mb-36'>
                    <ReviewAndOrders />
                </View>
            </ScrollView>

        </>
    )
}

export default EditProfile