import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import  PresentationScreen  from '../screens/PresentationScreen';

const AuthStack = createStackNavigator({ Login: LoginScreen });
const AppStack = createStackNavigator({ Presentation: PresentationScreen });

export default createAppContainer(
  createSwitchNavigator({
    Auth: AuthStack,
    App: AppStack, 
  },{
    initialRouteName: 'Auth',  
  })
);
