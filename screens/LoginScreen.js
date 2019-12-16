// import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text>Login></Text>
    </View>
  );
}

LoginScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
