import { View, Text, Image, useWindowDimensions } from 'react-native';
import React from 'react';

const OnBoardingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ width }} className='flex'>
      <Image
        className='flex-[0.6] justify-center'
        source={item.image}
        style={{ width, resizeMode: 'center' }}
      />
      <View className='flex-[0.4] justify-center px-8 bg-slate-100 rounded-t-[80px]'>
        <Text className='font-extrabold text-2xl text-center text-primary mb-2'>
          {item.title}
        </Text>
        <Text className='font-medium opacity-60 text-center leading-5'>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default OnBoardingItem;
