import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Settings: React.FC<{route: any}> = ({route}) => {
  const params = route.params as {
      username?: string;
  } | undefined;

  return (
     <View style={styles.container}>
            <View style={styles.content}>
                <Text>{params?.username}</Text>
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