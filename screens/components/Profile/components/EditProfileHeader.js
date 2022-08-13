import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowLeftIcon, StarIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { urlFor } from '../../../../sanity'
import { Avatar } from 'react-native-elements'
import { CameraIcon } from 'react-native-heroicons/outline'


const EditProfileHeader = (props) => {
    const navigation = useNavigation();
    const { image } = props
    return (

        <View className='relative'>
            <Image source={require('../../../../assets/profilebackground.jpg')} className='w-full h-56 bg-gray-300 p-4' />

            <TouchableOpacity className='absolute top-14 left-5 bg-gray-50 rounded-full p-2' onPress={() => {
                navigation.goBack()
            }}>
                <ArrowLeftIcon size={23} color={"#00CCBB"} />
            </TouchableOpacity>

            <View className='absolute -bottom-10 right-[135px] bg-white rounded-full items-center p-2 w-[78px] h-[78px] pt-[4px]'>
                <Avatar
                    size={70}
                    source={{
                        uri:
                            'https://links.papareact.com/wru',
                    }}
                    containerStyle={{ backgroundColor: "grey" }}
                    rounded={true}
                >
                </Avatar>
            </View>
            <View className='absolute bottom-3 right-3 bg-white rounded-lg items-center p-2 flex-row space-x-1'>
                <CameraIcon size={15} color={"black"} />
                <Text className='text-sx font-semibold'>Edit</Text>
            </View>
        </View>

    )
}

export default EditProfileHeader