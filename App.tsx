import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator(); 

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor="#fff"
      />
        {/* <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Screen1') {
                  iconName = focused
                    ? 'https://cdn-icons-png.flaticon.com/512/11516/11516559.png'
                    : 'https://cdn-icons-png.flaticon.com/512/11516/11516605.png';
                } else if (route.name === 'Screen2') {
                  iconName = focused 
                    ? 'https://cdn-icons-png.flaticon.com/512/11517/11517121.png'
                    : 'https://cdn-icons-png.flaticon.com/512/11517/11517122.png';
                }
  
                return <Image style={{height: size, width: size}} source={{uri: iconName}} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name="Screen1" component={Screen1} />
            <Tab.Screen name="Screen2" component={Screen2} />
          </Tab.Navigator>
        </NavigationContainer> */}
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Screen1"> 
              <Drawer.Screen name="Screen1" component={Screen1} />
              <Drawer.Screen name="Screen2" component={Screen2} /> 
            </Drawer.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
