import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';


const Home: React.FC<{navigation: any}> = ({navigation}) => {
  const handleButtonClick = () => {
    navigation.navigate('About', {
              userId: 1,
              userInfo: {
                username: 'htet myat',
              }
            } as {
              userId: number;
              userInfo: {
                username: string;
              }})
  }
  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <Text>Home</Text>
            <Button title='Press Me!' onPress={handleButtonClick}/>
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

export default Home;