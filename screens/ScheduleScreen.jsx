import { Text, ScrollView } from 'react-native';
import React from 'react';

const ScheduleScreen = () => {
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
      <Text>Schedule Screen</Text>
    </ScrollView>
  );
};

export default ScheduleScreen;
