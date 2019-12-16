import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';

const Card = ({company}) => {
  const handlePressCompany = link => {
    WebBrowser.openBrowserAsync(link);
  };

  return (     
    <View style={ styles.container }>
      <Text style={ styles.title }>{ company.name }</Text>
      <Image style={ styles.logo } source={ company.logo } />
      <View>
        <Touchable
          style={ styles.link }
          onPress={ () => handlePressCompany(company.link) }>
            <Text style={ styles.customButton }>Link</Text>
        </Touchable>          
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: "center",
    justifyContent: "center"    
  },
  title:{
    fontSize: 20,
    marginTop: 15,
  },
  logo:{
    width: 60,
    height: 60,
    marginTop: 5,
  },
  customButton:{
    width: 100,
    height: 25,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'palegreen',
    paddingLeft: 37,
    paddingTop: 5,  
    marginBottom: 15
  } 
});

export default Card;
