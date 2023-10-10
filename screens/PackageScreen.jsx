import { Text, ScrollView } from 'react-native';
import React from 'react';

const PackageScreen = () => {
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
      <Text>Package Screen</Text>
    </ScrollView>
  );
};

export default PackageScreen;
