import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';
import Ionicons from 'react-native-vector-icons/Ionicons';

import dataFetchScreen from './src/screens/dataFetchScreen';
import dataViewScreen from './src/screens/dataViewScreen';
import dataPostScreen from './src/screens/dataPostScreen';




const AppNavStack = createStackNavigator(
  {
    Fetch: {
      screen: dataFetchScreen,
      navigationOptions: () => ({
        headerTitleStyle: {fontSize: 18, fontWeight: '500'},
        title: 'Main',
        headerBackTitle: 'back',
      }),
    },
    View: {
      screen: dataViewScreen,
      navigationOptions: () => ({
        headerTitleStyle: {fontSize: 18, fontWeight: '500'},
        title: 'Details',
        headerBackTitle: 'back',
      }),
    },
  },
  { 
    headerLayoutPreset: 'center',
  }
);

const tabs = createBottomTabNavigator(
  {
    Get : AppNavStack,
    Post : dataPostScreen,
  },
  {
    initialRouteName : 'Get',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Get') {
          iconName = 'ios-cloud-download'; 
        } else if (routeName === 'Post') {
          iconName = 'ios-cloud-upload';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#000000',
      labelStyle: {
        fontSize: 12,
      },
      showLabel: true,
    }
  }
);


const AppContainer = createAppContainer(tabs);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        
          <View style={{flex:1,}}>
            <StatusBar barStyle="dark-content" />
            <AppContainer />
          </View>

      </Provider>
    );
  }
}



