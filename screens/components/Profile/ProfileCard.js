import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar } from 'react-native-elements'
import { ChevronRightIcon } from 'react-native-heroicons/solid'

const ProfileCard = () => {
    return (
        <View className='bg-white justify-between flex-row p-5 items-center mt-4 rounded-xl'>
            <View className='space-y-6'>
                <Text className='font-bold text-xl'>Akshat</Text>
                <TouchableOpacity className='flex-row items-center space-x-1'>
                    <Text className='text-[#00CCBB] text-[11px] font-bold'>View Activity</Text>
                    <ChevronRightIcon color={"#00CCBB"} size={13} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Avatar
                    size={60}
                    source={{
                        uri:
                            'https://links.papareact.com/wru',
                    }}
                    containerStyle={{ backgroundColor: "grey" }}
                    rounded={true}
                >
                </Avatar>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileCard