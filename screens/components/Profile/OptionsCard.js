import { View, Text } from 'react-native'
import React from 'react'

const OptionsCard = (props) => {
    const { title, icon } = props
    return (
        <View className='bg-white items-center p-4 space-y-3 rounded-lg w-[77px]'>
            {icon}
            <Text className='text-[8px] font-bold'>{title}</Text>
        </View>
    )
}

export default OptionsCard