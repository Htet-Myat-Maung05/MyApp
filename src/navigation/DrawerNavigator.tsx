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
                console.log("Home");
                props.navigation.navigate('Home')
            }}}
          />
          <DrawerItem 
            label="contact" 
            onPress={() => {
                console.log("Contact");
                props.navigation.navigate('Contact')
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
    </Drawer.Navigator>
  );
};


export default DrawerNavigator;
