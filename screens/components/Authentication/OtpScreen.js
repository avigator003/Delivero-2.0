import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable';
import { Input } from 'react-native-elements';
import { ArrowLeftIcon, AtSymbolIcon, DeviceMobileIcon, EyeIcon, EyeOffIcon, LockClosedIcon, UserIcon } from 'react-native-heroicons/outline';
import OTPTextView from 'react-native-otp-textinput';
import { useNavigation } from '@react-navigation/native';

const OtpScreen = () => {
    const navigation = useNavigation()

    const [otp, setOtp] = useState()


    return (
        <SafeAreaView className='bg-white flex-1 relative p-2'>

            <Animatable.Image
                source={require('../../../assets/otp.png')}
                animation="slideInUp"
                className='w-full mt-10 flex-1 mb-8'
            />
            <TouchableOpacity className='absolute top-14 left-5 bg-gray-200 rounded-full p-2' onPress={() => {
                navigation.navigate("SignUp")
            }}>
                <ArrowLeftIcon size={23} color={"#00CCBB"} />
            </TouchableOpacity>

            <View className='p-2 mt-5 mx-4 mb-4'>
                <Text className='font-bold text-2xl mb-7'>Enter OTP</Text>

                <View>
                    <OTPTextView
                        handleTextChange={(otpValue) => setOtp(otpValue)}
                        inputCount={4}
                        keyboardType="numeric"
                        textInputStyle={{
                            borderWidth: 3,
                            borderRadius: 10,
                            borderColor: "#00CCBB"
                        }}
                    />

                </View>


                <View className='items-center space-y-6 mt-8'>

                    <View className='bg-[#00CCBB] p-2 py-3 rounded-lg w-full items-center'>
                        <Text className='text-white font-bold text-base'>Confirm OTP</Text>
                    </View>

                </View>
            </View>

        </SafeAreaView>
    )
}

export default OtpScreen