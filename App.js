import React from 'react';
import {StyleSheet, Image} from 'react-native';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import ComponentFragment from './page/ComponentFragment';
import CustomFragment from './page/CustomFragment';

import FlatListPage from './page/FlatListPage';

import SliderPage from './page/SliderPage';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const HomeTabNavigator = createBottomTabNavigator({
  ComponentFragment: {
    screen: ComponentFragment,
    navigationOptions: {
      header: null,
      tabBarLabel: 'Component',
      tabBarIcon: ({focused, tintcolor}) => {
        var icon = focused ? require('./image/tab-user.png') : require('./image/tab-user.png');
        return <Image source={icon} style={styles.tabicon} />
      },
    },
  },
  CustomFragment: {
    screen: CustomFragment,
    navigationOptions: {
      header: null,
      tabBarLabel: 'Custom',
      tabBarIcon: ({focused, tintcolor}) => {
        var icon = focused ? require('./image/tab-user.png') : require('./image/tab-user.png');
        return <Image source={icon} style={styles.tabicon} />
      },
    },
  },
}, {
  tabBarOptions: {
    activeTintColor: '#633884',
    inactiveTintColor: '#999',
    barStyle: {
      height: 60,
      paddingVertical: 5,
      backgroundColor: '#F9F9F9',
    },
    labelStyle: {
      fontSize: 12,
      lineHeight: 20,
    },
    showLabel: true,
    showIcon: true,
  },
});

const AppNavigator = createStackNavigator({

  // Home
  Home: {
    screen: HomeTabNavigator,
    navigationOptions: {
      header: null,
    }
  },

  // Component
  FlatListPage: {
    screen: FlatListPage,
    navigationOptions: {
      title: 'Flat List',
      headerStyle: {
        backgroundColor: '#EEE',
      },
      headerTintColor: '#5d5d5d',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackTitle: 'back',
    },
  },

  // Custom
  SliderPage: {
    screen: SliderPage,
    navigationOptions: {
      title: 'Slider',
      headerStyle: {
        backgroundColor: '#EEE',
      },
      headerTintColor: '#5d5d5d',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackTitle: 'back',
    },
  },

});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  tabicon: {
    width: 20,
    height: 20,
  },
});
