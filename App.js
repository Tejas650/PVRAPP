import React from 'react';
import {StatusBar} from 'react-native';
import {MovieContext} from './Context';
import StackNavigator from './StackNavigator';

const App = () => {
  return (
    <>
      <MovieContext>
        <StackNavigator />
        <StatusBar style="auto" />
      </MovieContext>
    </>
  );
};

export default App;
