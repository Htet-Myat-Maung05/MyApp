import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';

const About: React.FC<{route: any, navigation: any}> = ({route, navigation}) => {
  const params = route.params as {
    userId?: number;
    userInfo?: {
      username?: string;
    };
  } | undefined;

  return (
     <View style={styles.container}>
            <View style={styles.content}>
                <Text>{params?.userId}</Text>
                <Text>{params?.userInfo?.username}</Text>
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