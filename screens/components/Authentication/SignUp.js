import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable';
import { Input } from 'react-native-elements';
import { AtSymbolIcon, DeviceMobileIcon, UserIcon } from 'react-native-heroicons/outline';
const SignUp = () => {
    return (
        <SafeAreaView className='bg-white flex-1'>
            <Animatable.Image
                source={require('../../../assets/signup.png')}
                animation="slideInUp"
                className='w-full mt-10 flex-1'
            />
            <View className='p-2 mt-5 mx-4'>
                <Text className='font-bold text-2xl'>Sign up</Text>

                <View className='flex-row  space-x-3 mt-2'>
                    <View className='mt-3'>
                        <AtSymbolIcon size={20} color="gray" />
                    </View>
                    <View className='flex-1'>
                        <Input
                            style={{ fontSize: 15, fontWeight: '600' }}
                            placeholder='Email'
                        />
                    </View>
                </View>


                <View className='flex-row space-x-3 mt-2'>
                    <View className='mt-3'>
                        <UserIcon size={20} color="gray" />
                    </View>
                    <View className='flex-1'>
                        <Input
                            style={{ fontSize: 15, fontWeight: '600' }}
                            placeholder='Full name'
                        />
                    </View>
                </View>

                <View className='flex-row space-x-4 mt-2'>
                    <View className='mt-3'>
                        <DeviceMobileIcon size={20} color="gray" />
                    </View>
                    <View className='flex-1'>
                        <Input
                            style={{ fontSize: 15, fontWeight: '600' }}
                            placeholder='Mobile'
                        />
                    </View>
                </View>

                <View className='items-center space-y-6'>
                    <View  >
                        <Text className='font-bold text-sm text-gray-400 '>By signing up you're agree to our Terms & Conditions and Privacy Policy.
                        </Text>
                    </View>

                    <View className='bg-[#00CCBB] p-2 py-3 rounded-lg w-full items-center'>
                        <Text className='text-white font-bold text-base'>Continue</Text>
                    </View>

                    <View className='flex-row space-x-2'>
                        <Text className='font-bold text-base text-gray-400'>Joined us before?</Text>
                        <Text className='text-[#00CCBB] text-base font-bold'>Login</Text>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default SignUp