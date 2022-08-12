import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BasicMethodScreen from './screens/BasicMethodScreen';
import CropDetailsScreen from './screens/CropDetailsScreen';
import CropListScreen from './screens/CropListScreen';
import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
      <Stack.Navigator initialRouteName='Welcome' 
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BasicMethod" component={BasicMethodScreen} />
        <Stack.Screen name="CropList" component={CropListScreen} />
        <Stack.Screen name="CropDetails" component={CropDetailsScreen} />
      </Stack.Navigator>
  );
}

export default AppNavigation;