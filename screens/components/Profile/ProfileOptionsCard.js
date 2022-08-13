import { View, Text } from 'react-native'
import React from 'react'
import { ChevronRightIcon } from 'react-native-heroicons/outline'

const ProfileOptionsCard = (props) => {
    const { title, icon } = props
    return (
        <View className='flex-row justify-between bg-white rounded-md items-center p-4 '>
            <View className='flex-row space-x-4 items-center'>
                <View className='bg-gray-200 rounded-full p-2'>{icon}</View>
                <Text className='font-semibold text-sm'>{title}</Text>
            </View>
            <View>
                <ChevronRightIcon color={"gray"} size={15} />
            </View>
        </View>
    )
}

export default ProfileOptionsCard