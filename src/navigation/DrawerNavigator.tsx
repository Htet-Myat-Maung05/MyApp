import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import { Text } from 'react-native-gesture-handler';
import { View } from 'react-native';
import Home from '@/screens/Home';
import Contact from '@/screens/Contact';
import Form from '@/screens/Form';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => (  
        <DrawerContentScrollView {...props}>
          <View>
            <Text>
              Hello
            </Text>
          </View>
          <DrawerItem 
            label="Home" 
            onPress={() => {{
                props.navigation.navigate('Home')
            }}}
          />
          <DrawerItem 
            label="contact" 
            onPress={() => {
                props.navigation.navigate('Contact')
            }}
          />
          <DrawerItem 
            label="Form" 
            onPress={() => {
                props.navigation.navigate('Form')
            }}
          />
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home' }}
      />
      <Drawer.Screen
        name="Contact"
        component={Contact}
      />
      <Drawer.Screen
        name="Form"
        component={Form}
      />
    </Drawer.Navigator>
  );
};


export default DrawerNavigator;
