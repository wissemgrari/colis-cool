import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
  ActivityIndicator,
  Image,
} from 'react-native';
import Toast from 'react-native-toast-message';

import { Feather } from '@expo/vector-icons';
import _Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../redux/auth/authSlice.js';

const SigninScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const email = useRef(null);
  const password = useRef(null);

  const { isLoading } = useSelector((state) => state.auth);

  const handleSignIn = () => {
    const data = {
      email: email.current.value,
      password: password.current.value,
    };
    if (!data.email || !data.password) {
      console.log('test');
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please fill in all the fields',
      });
    } else {
      dispatch(signin(data));
    }
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        width: '100%',
        paddingVertical: 20,
      }}
    >
      <View className='justify-center flex-[1] px-8 gap-y-10'>
        <View className='flex-[.4] w-full items-center'>
          <Image
            source={require('../assets/images/login.png')}
            style={{ height: 200, resizeMode: 'contain' }}
          />
        </View>
        <View className='flex-[.6]'>
          <Text className='mb-2 text-4xl italic font-bold tracking-widest'>
            Login
          </Text>
          <Text className='mb-5 text-lg opacity-70'>Please login below.</Text>
          <View className='space-y-5'>
            {/* Email Field */}
            <View className='flex-row items-center border-b-2 border-light'>
              <Feather name='mail' size={24} color='gray' />
              <TextInput
                maxLength={35}
                keyboardType='email-address'
                placeholder='Email Address'
                className='flex-1 p-3 text-base'
                ref={email}
                onChangeText={(text) => (email.current.value = text)}
              />
            </View>
            {/* Password Field */}
            <View className='flex-row items-center border-b-2 border-light'>
              <Feather name='lock' size={24} color='gray' />
              <TextInput
                maxLength={35}
                secureTextEntry={!passwordVisibility}
                placeholder='Password'
                className='flex-1 p-3 text-base'
                ref={password}
                onChangeText={(text) => (password.current.value = text)}
              />
              <TouchableOpacity
                className='px-4 py-2'
                style={{ zIndex: 1 }}
                onPress={() => setPasswordVisibility(!passwordVisibility)}
              >
                <Feather
                  name={passwordVisibility ? 'eye-off' : 'eye'}
                  size={24}
                  color='gray'
                />
              </TouchableOpacity>
            </View>
            <Text className='self-end mb-8 opacity-60'>Forgot password ?</Text>
          </View>
          {!isLoading ? (
            <_Button title='Sign In' onPress={handleSignIn} />
          ) : (
            <_Button
              disabled={true}
              title='Loading'
              icon={<ActivityIndicator size={22} color='white' />}
            />
          )}
          <View className='flex-row items-center justify-center mt-5 gap-x-2'>
            <Text className='text-base text-center opacity-60'>
              Don't have an account ?
            </Text>
            <Pressable onPress={() => navigation.navigate('Signup')}>
              <Text className='font-bold text-primary'>Sign up here</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
