import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Contact = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Contact</Text>
      </View>
    </View>
  );
};

export default Contact;

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
});
