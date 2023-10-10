import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import _Button from '../components/Button';
import Toast from 'react-native-toast-message';

import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../redux/auth/authSlice.js';

const SignupScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isLoading, isSuccess } = useSelector((state) => state.auth);

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const displayName = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const handleSignup = () => {
    let form = {
      displayName: displayName.current.value,
      email: email.current.value,
      password: password.current.value,
      confirmPassword: confirmPassword.current.value,
    };

    if (
      !form.displayName ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      return Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please fill in all the fields',
      });
    }
    if (form.password !== form.confirmPassword) {
      return Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Passwords does not match',
      });
    }
    const user = {
      displayName: form.displayName,
      email: form.email,
      password: form.password,
    };
    dispatch(signup(user));
  };
  useEffect(() => {
    if (isSuccess) {
      navigation.navigate('Signin');
    }
  }, [isSuccess]);
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
      <View className='justify-center flex-1 px-8'>
        <View>
          <Text className='text-4xl italic font-bold tracking-widest text-center'>
            Sign up
          </Text>
          <Text className='mt-2 text-lg text-center opacity-70'>
            Create your account.
          </Text>
        </View>
        <View>
          <View className='my-8 space-y-5'>
            {/* Name Field */}
            <View className='flex-row items-center border-b-2 border-light'>
              <Feather name='user' size={24} color='gray' />
              <TextInput
                maxLength={35}
                placeholder='Display name'
                className='flex-1 p-3 text-base'
                ref={displayName}
                onChangeText={(text) => (displayName.current.value = text)}
              />
            </View>
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
                onPress={() => setPasswordVisibility(!passwordVisibility)}
              >
                <Feather
                  name={passwordVisibility ? 'eye-off' : 'eye'}
                  size={24}
                  color='gray'
                />
              </TouchableOpacity>
            </View>
            {/* Confirm Password Field */}
            <View className='flex-row items-center border-b-2 border-light'>
              <Feather name='lock' size={24} color='gray' />
              <TextInput
                maxLength={35}
                secureTextEntry={!passwordVisibility}
                placeholder='Confirm Password'
                className='flex-1 p-3 text-base'
                ref={confirmPassword}
                onChangeText={(text) => (confirmPassword.current.value = text)}
              />
              <TouchableOpacity
                className='px-4 py-2'
                onPress={() => setPasswordVisibility(!passwordVisibility)}
              >
                <Feather
                  name={passwordVisibility ? 'eye-off' : 'eye'}
                  size={24}
                  color='gray'
                />
              </TouchableOpacity>
            </View>
          </View>
          {!isLoading ? (
            <_Button title='Sign Up' onPress={handleSignup} />
          ) : (
            <_Button
              disabled={true}
              title='Loading'
              icon={<ActivityIndicator size={22} color='white' />}
            />
          )}
          <View className='flex-row items-center justify-center mt-5'>
            <Text className='text-base text-center opacity-60'>
              Already have an account ?
            </Text>
            <Pressable
              className='p-2'
              onPress={() => navigation.navigate('Signin')}
            >
              <Text className='font-bold text-primary'>Sign in here</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;
