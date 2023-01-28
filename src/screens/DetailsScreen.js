import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Icon from '../components/Icon';

const DetailsScreen = ({ navigation, route }) => {
  const places = route.params;
  return (
    <SafeAreaView className=' flex-1 bg-white'>
      <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />
      <ImageBackground
        className=' flex-[0.7]'
        source={places.image}
      >
        <View className=' mt-[60px] flex-row justify-between px-5'>
          <Icon
            onPress={() => navigation.goBack()}
            name='arrow-back-ios' size={28} color='white' />
          <Icon name='more-vert' size={28} color='white' />
        </View>
        <View className=' absolute bottom-[90px] w-full px-5 flex-row justify-between items-center'>
          <Text className=' text-[25px] w-[70%] text-white font-bold'> {places.name} </Text>
          <View className=' flex-row '>
            <Icon name='star' size={28} color='gold' />
            <Text className=' text-white text-[20px] font-bold'>5.0</Text>
          </View>
        </View>
      </ImageBackground>
      <View className=' flex-[0.3] bg-white -top-[30px] py-[40px] px-[20px] rounded-t-[30px]'>
          <View
            style={{elevation: 12}}
            className=' h-[60px] w-[60px] absolute items-center justify-center -top-[30px] right-[20px] bg-white rounded-full'>
            <TouchableOpacity>
              <Icon name='favorite' size={28} color='red' />
            </TouchableOpacity>
          </View>
        <View className=' h-[60px] flex-row'>
          <Icon name='place' size={28} color='#04555c' />
          <Text className=' text-[20px] font-bold text-[#04555c]'> {places.location} </Text>
        </View>
        <View>
          <Text className=' text-[20px] font-bold mb-5'>About the trip</Text>
          <Text className=' leading-6 font-bold'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum vel maxime labore
            dolorum quasi vitae sequi dolor laboriosam eius ratione ducimus,
            ab explicabo vero officia aspernatur iusto molestiae numquam accusamus!
          </Text>
        </View>
      </View>
      <View className=' h-[70px] bg-[#04555c] rounded-t-[25px] justify-center items-center flex-row px-[20px] py-[10px]'>
        <View className=' flex-1 flex-row items-center'>
          <Text className=' text-white text-[20px] font-bold'>$ 500.98</Text>
          <Text className='text-white  font-bold'> / PER DAY</Text>
        </View>
        <TouchableOpacity activeOpacity={0.8}>
          <View className=' h-full bg-white px-[40px] justify-center rounded-xl '>
            <Text className=' font-bold text-[16px] text-[#04555c]'>Book Now</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default DetailsScreen;