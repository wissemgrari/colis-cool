import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../redux/auth/authSlice';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

const AuthStackScreen = () => {
  const dispatch = useDispatch();
  const { isError, error } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isError) {
      switch (error) {
        case 'Error: auth/invalid-email':
          return Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'Invalid email address.',
          });
        case 'Error: auth/user-not-found':
          return Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'User does not exist!',
          });
        case 'Error: auth/wrong-password':
          return Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'Invalid credentials',
          });
        case 'Error: auth/weak-password':
          return Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'Weak password',
          });
        case 'Error: auth/email-already-in-use':
          return Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'Email is already in use',
          });
      }
    }
    return () => {
      dispatch(reset());
    };
  }, [isError, error]);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Signin' component={SigninScreen} />
      <Stack.Screen name='Signup' component={SignupScreen} />
    </Stack.Navigator>
  );
};
0;

export default AuthStackScreen;
