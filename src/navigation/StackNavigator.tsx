import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Contact from '../screens/Contact';
import { RootParamList } from '../types/types';

const Stack = createNativeStackNavigator<RootParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Contact' component={Contact}/>
    </Stack.Navigator>
  )
}

export default StackNavigator