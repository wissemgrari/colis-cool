import React from 'react';
import { View, Animated, useWindowDimensions } from 'react-native';

const Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <View className='flex-row items-center justify-center h-16 bg-slate-100'>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={i.toString()}
            style={{ width: dotWidth, opacity }}
            className='h-[10px] rounded-full bg-primary mx-2'
          ></Animated.View>
        );
      })}
    </View>
  );
};

export default Paginator;
