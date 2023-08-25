import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import MovieScreen from './src/screens/MovieScreen';
import TheatreScreen from './src/screens/TheatreScreen';
import TicketScreen from './src/screens/TicketScreen';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Movies"
          component={MovieScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Theatre"
          component={TheatreScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Ticket"
          component={TicketScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
