import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const _Button = ({ type, title, icon, onPress, disabled }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.6}
      onPress={onPress}
      className={`${
        type === 'secondary' ? 'bg-light' : 'bg-secondary'
      } px-5 py-3 rounded-xl`}
    >
      <View className='flex-row justify-center items-center gap-1'>
        <Text
          className={`${type === 'secondary' ? 'text-primary' : 'text-white'} 
            font-bold text-lg`}
        >
          {title}
        </Text>
        {icon && icon}
      </View>
    </TouchableOpacity>
  );
};

_Button.defaultProps = {
  type: 'primary',
  disabled: false,
};

export default _Button;
