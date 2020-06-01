import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'

import Routes from './src/routes/Home.routes'
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' backgroundColor="#fff"/>
      <Routes/>
    </NavigationContainer>
  );
}

