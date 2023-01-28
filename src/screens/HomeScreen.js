import { View, Text, ScrollView, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import tourCategories from '../data/tourCategories';
import places from '../data/places';
import Card from '../components/Card';
import { FlashList } from '@shopify/flash-list';
import Icon from '../components/Icon';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
  const { width } = Dimensions.get('screen');
  return (
    <SafeAreaView className=' flex-1'>
      <StatusBar
        backgroundColor='#04555c' translucent={false}
        style='light'
      />
      <View className=' bg-[#04555c] p-[20px] flex-row justify-between'>
        <Icon name='sort' size={24} color='white' />
        <Icon name='notifications-none' size={24} color='white' />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className=' relative h-[120px] px-[20px] bg-[#04555c]'>
          <Text className=' text-[24px] text-white font-bold'>Explore the</Text>
          <Text className=' text-[24px] text-white font-bold'>beautiful place</Text>
          <View
            style={{ elevation: 12 }}
            className=' flex-row absolute h-[60px] w-full bg-white items-center self-center px-5 -bottom-7 rounded-xl'>
            <Icon name='search' size={28} />
            <TextInput
              placeholder='search places'
              className=' flex-1 ml-2' />
          </View>
        </View>
        <View className=' flex-row mt-[50px] px-[20px] justify-between'>
          {tourCategories.map((tour, index) => (
            <View key={index} className=' bg-[#e1e8e9] p-[20px] rounded-xl'>
              <Icon  name={tour} size={24} color='#04555c' />
            </View>
          ))}
        </View>
        <Text className=' m-5 font-bold text-[20px]'>Places</Text>
        <View>
          <FlashList
            renderItem={({item}) => (
              <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Details', item)}>
                <Card key={item.id} place={item} width={width / 2} h='h-[220px]' />
              </TouchableOpacity>
            )
          }
            data={places}
            estimatedItemSize={200}
            horizontal
            contentContainerStyle={{paddingLeft: 10}}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Text className=' m-5 font-bold text-[20px]'>Recommended</Text>
        <View>
        <FlashList
            renderItem={({item, index}) => <Card key={index} place={item} width={width - 20} h='h-[200px]' other={true} />}
            data={places}
            estimatedItemSize={200}
            horizontal
            contentContainerStyle={{paddingLeft: 10}}
            showsHorizontalScrollIndicator={false}
            snapToInterval={width - 20}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;