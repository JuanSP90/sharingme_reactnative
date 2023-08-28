import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './src/screens/Login';
import Profile from './src/screens/Profile';
import Share from './src/screens/Share';
import Explore from './src/screens/Explore';
import ForgotPassword from './src/screens/ForgotPassword';
// import BottomTab from './src/navigation/BottomTab';

const App = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profile">
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
          )}
        </Tab.Screen>

        <Tab.Screen name="Share">
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="Share" component={Share} />
            </Stack.Navigator>
          )}
        </Tab.Screen>

        <Tab.Screen name="Explore">
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="Explore" component={Explore} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
