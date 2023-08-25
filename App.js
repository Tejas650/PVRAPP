import React from 'react';
import {StatusBar} from 'react-native';
import {MovieContext} from './Context';
import StackNavigator from './StackNavigator';
import {StripeProvider} from '@stripe/stripe-react-native';

const App = () => {
  const publishableKey =
    'pk_test_51NghMMSCxRH7ID4E6a3a4vkuJ61oFHiiLUYitWZoaGaZZXQxtOlb4CvhZXY5dd8Hu5YbuD0GpeelpRtjRiOpnJNh00u8Ha8GNg';

  return (
    <>
      <StripeProvider publishableKey={publishableKey}>
        <MovieContext>
          <StackNavigator />
          <StatusBar style="auto" />
        </MovieContext>
      </StripeProvider>
    </>
  );
};

export default App;
