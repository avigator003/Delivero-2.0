import { View, Text } from 'react-native'
import React from 'react'
import ProfileOptionsCard from './ProfileOptionsCard'
import { StarIcon } from 'react-native-heroicons/outline'
import { ChevronRightIcon } from 'react-native-heroicons/solid'

const ProfileOptionsContainerCard = (props) => {
    const { title, options } = props
    return (
        <View className='bg-white rounded-lg'>
            <View className='pt-3'>
                <Text className='font-semibold text-sm border-l-4 border-[#00CCBB] pl-3 '>{title}</Text>
            </View>

            {options}

        </View>
    )
}

export default ProfileOptionsContainerCard