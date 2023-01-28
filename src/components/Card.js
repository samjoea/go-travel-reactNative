import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import Icon from './Icon';

const Card = ({ place, width, h, other }) => {
  return (
   <ImageBackground
      source={place.image}
      style={{width: width}}
      className={` ${h} p-[10px] mr-3 rounded-xl overflow-hidden`} >
      <Text className=' text-white mt-[10px] text-[20px] font-bold'> {place.name} </Text>
      <View className={`flex-1 ${other ? 'items-start flex-row mt-[10px]' : 'items-end flex-row'} `}>
         <View className={` ${other ? 'mr-2' : 'flex-1'} flex-row items-center`}>
            <Icon name='place' size={24} color='white' />
            <Text className=' text-white ml-1 font-bold'>{place.location}</Text>
         </View>
         <View className=' flex-row items-center'>
            <Icon name='star' size={24} color='white' />
            <Text className=' text-white ml-1 font-bold'>5.0</Text>
         </View>
      </View>
      {other ? <Text className='text-white ml-1 font-bold leading-5'>{place.details}</Text> : null}
   </ImageBackground>
  );
}

export default Card;