import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function PresentationScreen() {
  return (
    <ScrollView style={styles.container}>  
        <Text style={styles.title}>Companys</Text>    
    </ScrollView>
  );
}

PresentationScreen.navigationOptions = {
  title: 'Presentation',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  title:{
    color: 'blue',
    fontSize: 30,
    marginBottom: 30,
  }
});