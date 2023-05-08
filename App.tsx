import React, { useState } from 'react';
import {
  StatusBar,
  Text,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen  from './src/screens/Home'

const Stack = createNativeStackNavigator();

function StartScreen({ navigation }){

  const [timePassed, setTimePassed] = useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }, 5000);

  const isDarkMode = true;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  };

  const textStyle = {
    fontSize: 50,
    color: '#e50914',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontVariant: 'small-caps'
  };

  if (!timePassed) {
    return (
      <View style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Text style={textStyle}>FakeFlix</Text>
      </View>
    );
  }

  navigation.navigate('Second');
  return null;

}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}
      initialRouteName='Start'>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Second" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
