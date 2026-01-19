import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { useTypedNavigation } from '../types/types';

const Home: React.FC = () => {
  const navigation = useTypedNavigation<'Home'>();

  const handleButtonClick = () => {
    navigation.navigate('About', {
      userId: 1,
      userInfo: {
        username: 'htet myat',
      }
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Home Screen</Text>
        <Button title='Go to About with params' onPress={handleButtonClick}/>
        <Button title='Go to Spec page' onPress={() => navigation.navigate('Spec')}/>
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