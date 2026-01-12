import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useTypedRoute } from '../types/types';

const Settings= () => {
  const route = useTypedRoute<'Settings'>();

  const {username} = route.params;

  return (
     <View style={styles.container}>
            <View style={styles.content}>
                <Text>{username}</Text>
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#fff0f5',
      },
       content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
    })
export default Settings;