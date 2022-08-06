import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { AdjustmentsIcon, SearchIcon } from 'react-native-heroicons/outline'

const SearchbarHeader = () => {
    return (
        <View className='flex-row items-center space-x-2 mt-2'>
            <View className="flex-1 flex-row bg-gray-200 space-x-2 p-1 items-center rounded-lg">
                <SearchIcon size={20} color={"gray"} />
                <TextInput placeholder='Restaurants and cusines' />
            </View>
            <AdjustmentsIcon size={20} color={"#7AC0B6"} />
        </View>
    )
}

export default SearchbarHeader;