import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import SafeAreaView from 'react-native-safe-area-view';
import Connect from './src/screens/Connect';
import Sales from './src/screens/Sales';
import Products from './src/screens/Products';
import Product from './src/screens/Product';
import OfferCodes from './src/screens/OfferCodes';
import Sale from './src/screens/Sale';
import Pings from './src/screens/Pings';
import {useScreens} from 'react-native-screens';
import Splash from './src/screens/Splash';
import 'react-native-gesture-handler'
import { createSwitchNavigator, createAppContainer, SafeAreaView } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

useScreens();

const MainNavigator = createStackNavigator(
  {
    Sales,
    Products,
    OfferCodes,
    Sale,
    Pings,
    Product,
  },
  {
    initialRouteName: 'Sales',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const LoginNavigator = createStackNavigator({
  Connect
},
  {
    initialRouteName: "Connect",
    defaultNavigationOptions: {
      header: null,
      transitionConfig: null,
    }
  });

const AppNavigator = createSwitchNavigator({
  Login: LoginNavigator,
  Main: MainNavigator,
  Splash
}, {
  initialRouteName: "Login",
  defaultNavigationOptions: {
    header: null,
    transitionConfig: null,
  }
});

const AppContainer = createAppContainer(AppNavigator)

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppContainer />
    </>
  );
};


export default App;
