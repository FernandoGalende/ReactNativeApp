// import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={ styles.container }>
      <Text> Make a login please </Text>
      <Button
        title="Log In"
        onPress={ () => navigation.navigate('App') }
      />
    </View>
  );
}

LoginScreen.navigationOptions = {
  title: 'Login',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
