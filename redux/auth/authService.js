import { auth } from '../../config/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const signup = async (user) => {
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    await updateProfile(auth.currentUser, {
      displayName: user.displayName,
    });
    return auth.currentUser;
  } catch (error) {
    throw Error(error.code);
  }
};

const signin = async (user) => {
  try {
    const res = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    await AsyncStorage.setItem('@user', JSON.stringify(auth.currentUser));
    return auth.currentUser;
  } catch (error) {
    throw Error(error.code);
  }
};

const logout = async () => {
  await AsyncStorage.removeItem('@user');
};

const authService = {
  signup,
  signin,
  logout,
};
export default authService;
