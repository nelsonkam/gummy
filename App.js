import React from 'react';
import {Platform, StatusBar} from 'react-native';
import Connect from './src/screens/Connect';
import Sales from './src/screens/Sales';
import Products from './src/screens/Products';
import Product from './src/screens/Product';
import OfferCodes from './src/screens/OfferCodes';
import Sale from './src/screens/Sale';
import Pings from './src/screens/Pings';
import Support from './src/screens/Support';
import {useScreens} from 'react-native-screens';
import Splash from './src/screens/Splash';
import 'react-native-gesture-handler'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Colors } from './src/utils/constants';
import { renderIcon } from './src/utils';

useScreens();

const SalesNavigator = createStackNavigator({
  Sales, Sale
}, {
  initialRouteName: 'Sales',
  defaultNavigationOptions: {
    title: "Sales",
    headerStyle: {
      // backgroundColor: Platform.OS == "android" ? Colors.gummyGreen : "white",
    },
  },
  navigationOptions: {
    tabBarIcon: renderIcon("sales"),
  }
});

const ProductsNavigator = createStackNavigator({
  Products, Product, OfferCodes
}, {
  initialRouteName: 'Products',
  defaultNavigationOptions: {
    title: "Products",
  },
  navigationOptions: {
    tabBarIcon: renderIcon("tag"),
  }
});

const PingsNavigator = createStackNavigator({
  Pings
}, {
  initialRouteName: 'Pings',
  defaultNavigationOptions: {
    title: "Pings",
  },
  navigationOptions: {
    tabBarIcon: renderIcon("ping"),
  }
})

Support.navigationOptions = {
  tabBarIcon: renderIcon("support"),
}

const MainNavigator = createMaterialBottomTabNavigator(
  {
    Sales: SalesNavigator,
    Products: ProductsNavigator,
    Pings: PingsNavigator,
    Support
  },
  {
    initialRouteName: 'Sales',
    shifting: false,
    barStyle: { backgroundColor: Colors.gummyGreen },
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
