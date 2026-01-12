import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { useTypedNavigation, useTypedRoute } from '../types/types';

const About: React.FC = () => {
  const route = useTypedRoute<'About'>();
  const navigation = useTypedNavigation<'About'>();

  const {userId, userInfo} = route.params;

  return (
     <View style={styles.container}>
            <View style={styles.content}>
                <Text>{userId}</Text>
                <Text>{userInfo.username}</Text>
                <Button title='Go to settings' onPress={()=> navigation.navigate('Settings', {
                  username: "Het Myat Maung"
                })}/>
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
export default About;