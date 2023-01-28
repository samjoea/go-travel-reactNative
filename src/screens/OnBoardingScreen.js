import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import bgImg from '../../assets/onboardImage.jpg';

const OnBoardingScreen = ({ navigation }) => {
  return (
    <View className=' flex-1'>
      <StatusBar translucent backgroundColor='rgba(0,0,0,0)' style='light'/>
      <ImageBackground
        // style={{flex: 1}}
        className=' flex-1'
        source={bgImg}
      >
        <View className=' h-[50%] bottom-0 absolute px-[40px]'>
          <Text className=' text-white text-4xl font-bold'>Discover</Text>
          <Text className=' text-white text-4xl font-bold'>world with us</Text>
          <Text className=' text-white leading-6 mt-4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia 
            ullam ad aut vel voluptatum dignissimos possimus neque praesentium
             numquam in veniam eaque quaerat provident?
          </Text>
          <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Home')}>
            <View className=' w-[120px] h-12 mt-6 bg-white rounded-xl justify-center items-center'>
              <Text className=' font-bold'>Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default OnBoardingScreen;