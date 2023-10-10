import React, { useState, useEffect } from 'react';
import { StatusBar as SB } from 'expo-status-bar';
import {
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Keyboard,
} from 'react-native';
import OnBoarding from './components/OnBoarding/OnBoarding';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import { toastConfig } from './config/tosat';
import Navigation from './navigation/Navigation';
import Loading from './components/Loading';

import { store } from './redux/store';
import { Provider, useDispatch } from 'react-redux';
import { toggleKeyboard } from './redux/global/globalSlice';

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

function App() {
  const dispatch = useDispatch();

  const [viewedOnboarding, setViewedOnboarding] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedonboarding');
      if (value !== null) {
        setViewedOnboarding(true);
      }
    } catch (error) {
      console.log('checkOnboarding', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    checkOnboarding();
  }, []);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        dispatch(toggleKeyboard());
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        dispatch(toggleKeyboard());
      }
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  if (loading) return <Loading />;

  return (
    <SafeAreaView style={styles.container}>
      {!viewedOnboarding ? (
        <OnBoarding setViewedOnboarding={setViewedOnboarding} />
      ) : (
        <Navigation />
      )}
      <SB style='auto' />
      <Toast
        config={toastConfig}
        visibilityTime={3000}
        style={{ fontSize: 30 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : null,
  },
});
