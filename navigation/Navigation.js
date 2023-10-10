import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStackScreen from './AppStackScreen';
import AuthStackScreen from './AuthStackScreen';

import { useDispatch, useSelector } from 'react-redux';
import { getUserFromAsyncStorage } from '../redux/auth/authSlice';

const Navigation = () => {
  const dispatch = useDispatch();
  const { user, isError, error, isLoading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(getUserFromAsyncStorage());
  }, []);

  return (
    <NavigationContainer>
      {user != null ? <AppStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};

export default Navigation;
