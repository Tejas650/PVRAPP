import React from 'react';
import {StatusBar} from 'react-native';
import StackNavigator from './StackNavigator';

const App = () => {
  return (
    <>
      <StackNavigator />
      <StatusBar style="auto" />
    </>
  );
};

export default App;
