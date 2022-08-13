import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import { AnnotationIcon, BellIcon, CogIcon, ColorSwatchIcon, CreditCardIcon, HeartIcon, IdentificationIcon, InformationCircleIcon, LogoutIcon, MapIcon, PencilAltIcon, SpeakerphoneIcon, StarIcon } from 'react-native-heroicons/outline'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useNavigation } from '@react-navigation/native'
import ProfileCard from './components/ProfileCard'
import ProfileOptionsCard from './components/ProfileOptionsCard'
import ProfileOptionsContainerCard from './components/ProfileOptionsContainerCard'
import OptionsCard from './components/OptionsCard'

const Profile = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className='my-4 px-4 mb-4'>
            <ScrollView showsVerticalScrollIndicator={false} >

                <View >
                    <TouchableOpacity className=' bg-gray-200 rounded-full p-2 w-10' onPress={() => {
                        navigation.goBack()
                    }}>
                        <ArrowLeftIcon size={23} color={"#00CCBB"} />
                    </TouchableOpacity>
                </View >

                <ProfileCard />
                <View className='flex-row justify-between mt-8'>
                    <OptionsCard title="Likes" icon={<HeartIcon size={20} color={"black"} />} />
                    <OptionsCard title="Notifications" icon={<BellIcon size={20} color={"black"} />} />
                    <OptionsCard title="Settings" icon={<CogIcon size={20} color={"black"} />} />
                    <OptionsCard title="Payments" icon={<CreditCardIcon size={20} color={"black"} />} />
                </View>

                <View className='mt-4'>
                    <View className='mb-4'>
                        <ProfileOptionsCard title={"Choose Language"} icon={<StarIcon size={15} color={"gray"} />} />
                    </View>
                    <View className='mb-4'>
                        <ProfileOptionsCard title={"Your rating"} icon={<StarIcon size={15} color={"gray"} />} />
                    </View>
                </View>

                <View className='mt-4 space-y-4'>


                    <View>
                        <ProfileOptionsContainerCard title="Food Orders" options={getFoodOrderOptions()} />
                    </View>

                    <View >
                        <ProfileOptionsCard title={"Zomato Pro"} icon={<StarIcon size={15} color={"gray"} />} />
                    </View>

                    <View>
                        <ProfileOptionsContainerCard title="Table Bookings" options={getTableBookingOptions()} />
                    </View>

                    <View >
                        <ProfileOptionsCard title={"About"} icon={<InformationCircleIcon size={15} color={"gray"} />} />
                    </View>

                    <View >
                        <ProfileOptionsCard title={"Send Feedback"} icon={<PencilAltIcon size={15} color={"gray"} />} />
                    </View>

                    <View >
                        <ProfileOptionsCard title={"Report a safety emergency"} icon={<IdentificationIcon size={15} color={"gray"} />} />
                    </View>

                    <View >
                        <ProfileOptionsCard title={"Rate us on Playstore"} icon={<SpeakerphoneIcon size={15} color={"gray"} />} />
                    </View>

                    <View className='mb-8'>
                        <ProfileOptionsCard title={"Logout"} icon={<LogoutIcon size={15} color={"gray"} />} />
                    </View>

                </View>

            </ScrollView >
        </SafeAreaView >
    )
}


const getFoodOrderOptions = () => {
    return (
        <View className='divide-y divide-slate-200'>
            <View>
                <ProfileOptionsCard title={"Your Orders"} icon={<ColorSwatchIcon size={15} color={"gray"} />} />
            </View>
            <View>
                <ProfileOptionsCard title={"Favourite Orders"} icon={<HeartIcon size={15} color={"gray"} />} />
            </View>
            <View>
                <ProfileOptionsCard title={"Address Book"} icon={<MapIcon size={15} color={"gray"} />} />
            </View>
            <View>
                <ProfileOptionsCard title={"Online Ordering Help"} icon={<AnnotationIcon size={15} color={"gray"} />} />
            </View>
        </View>
    )
}


const getTableBookingOptions = () => {
    return (
        <View className='divide-y divide-slate-200'>
            <View>
                <ProfileOptionsCard title={"Your Bookings"} icon={<ColorSwatchIcon size={15} color={"gray"} />} />
            </View>
            <View>
                <ProfileOptionsCard title={"Table Booking Help"} icon={<AnnotationIcon size={15} color={"gray"} />} />
            </View>
        </View>
    )
}
export default Profile