import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

const Loading = () => {
  return (
    <View className='items-center justify-center flex-1 flex-row bg-zinc-800'>
      <Text className='text-white text-2xl mr-2'>Loading</Text>
      <ActivityIndicator size='large' color='#5D4AB4' />
    </View>
  );
};

export default Loading;
