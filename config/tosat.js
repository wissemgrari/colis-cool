import { BaseToast } from 'react-native-toast-message';

export const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#7fb069', height: 80 }}
      text1Style={{
        color: '#7fb069',
        fontSize: 18,
        marginVertical: 10,
        fontWeight: '600',
      }}
      text2Style={{
        fontSize: 16,
        marginVertical: 10,
      }}
    />
  ),
  info: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#2589bd', height: 80 }}
      text1Style={{
        color: '#2589bd',
        fontSize: 18,
        marginVertical: 10,
        fontWeight: '600',
      }}
      text2Style={{
        fontSize: 16,
        marginVertical: 10,
      }}
    />
  ),
  error: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#f93943', height: 80 }}
      text1Style={{
        color: '#f93943',
        fontSize: 18,
        marginVertical: 10,
        fontWeight: '600',
      }}
      text2Style={{
        fontSize: 16,
        marginVertical: 10,
      }}
    />
  ),
};
