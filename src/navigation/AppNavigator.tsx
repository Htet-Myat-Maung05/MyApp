import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import About from '../screens/About';
import Settings from '../screens/Settings';
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import DrawerNavigator from './DrawerNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name='Home' component={DrawerNavigator}/>
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
