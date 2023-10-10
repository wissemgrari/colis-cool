import React, { useState, useRef } from 'react';
import { View, FlatList, Animated, TouchableOpacity, Text } from 'react-native';
import OnBoardingItem from './OnBoardingItem';
import _Button from '../Button';
import Paginator from '../Paginator';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import slides from '../../slides';
import NextButton from '../NextButton';

const OnBoarding = ({ setViewedOnboarding }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0]?.index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = async () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      try {
        await AsyncStorage.setItem('@viewedonboarding', 'true');
      } catch (error) {
        console.log('Error @setItem: ', error);
      }
    }
  };

  return (
    <View className='relative flex-1'>
      <View className='flex-[3]'>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnBoardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <NextButton
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / slides.length)}
        setCurrentIndex={setCurrentIndex}
        setViewedOnboarding={setViewedOnboarding}
      />
      <Paginator data={slides} scrollX={scrollX} />
      <TouchableOpacity className='absolute flex-row items-center w-20 gap-1 px-4 py-2 border rounded-lg top-4 right-4 border-secondary'>
        <Text className='text-primary'>Skip</Text>
        <AntDesign name='arrowright' color='#5D4AB4' />
      </TouchableOpacity>
    </View>
  );
};

export default OnBoarding;
