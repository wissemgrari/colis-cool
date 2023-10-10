import React from 'react';
import { ScrollView, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import _Button from '../components/Button';
import { logout } from '../redux/auth/authSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <ScrollView
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Text>Home screen</Text>
      <_Button title='logout' onPress={() => dispatch(logout())} />
    </ScrollView>
  );
};

export default HomeScreen;
