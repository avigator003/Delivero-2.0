import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable';
import { Input } from 'react-native-elements';
import { AtSymbolIcon, DeviceMobileIcon, EyeIcon, EyeOffIcon, LockClosedIcon, UserIcon } from 'react-native-heroicons/outline';
const SignIn = () => {

    const [showPassword, setShowPassword] = useState(true)


    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Animatable.Image
                source={require('../../../assets/signin.png')}
                animation="slideInUp"
                className='w-full mt-10 flex-1'
            />
            <View className='p-2 mt-5 mx-4 mb-4'>
                <Text className='font-bold text-2xl'>Sign in</Text>

                <View className='flex-row  space-x-3 mt-2'>
                    <View className='mt-3'>
                        <AtSymbolIcon size={20} color="gray" />
                    </View>
                    <View className='flex-1'>
                        <Input

                            style={{ fontSize: 15, fontWeight: '600' }}
                            placeholder='Email ID'
                        />
                    </View>
                </View>

                <View className='flex-row space-x-4 mt-3'>
                    <View className='mt-3'>
                        <LockClosedIcon size={20} color="gray" />
                    </View>
                    <View className='flex-1'>
                        <Input
                            rightIcon={
                                showPassword ?
                                    <TouchableOpacity className='mt-2' onPress={() => handleShowPassword()}>
                                        <EyeOffIcon size={20} color="gray" />
                                    </TouchableOpacity> :
                                    <TouchableOpacity className='mt-2' onPress={() => handleShowPassword()}>
                                        <EyeIcon size={20} color="gray" />
                                    </TouchableOpacity>

                            }
                            secureTextEntry={showPassword}
                            style={{ fontSize: 15, fontWeight: '600' }}
                            placeholder='Password'
                        />
                    </View>
                </View>

                <View className='mb-8' >
                    <Text className='font-bold text-sm text-[#00CCBB] text-right'>Forgot Password?
                    </Text>
                </View>

                <View className='items-center space-y-6 mb-8'>

                    <View className='bg-[#00CCBB] p-2 py-3 rounded-lg w-full items-center'>
                        <Text className='text-white font-bold text-base'>Login</Text>
                    </View>

                    <View className='flex-row space-x-2 '>
                        <Text className='font-bold text-base text-gray-400'>New to Deliveroo?</Text>
                        <Text className='text-[#00CCBB] text-base font-bold'>Register</Text>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default SignIn