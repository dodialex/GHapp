import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import Router from './router';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';

const MainApp = () => {
  const stateGlobal = useSelector(state => state);
  console.log('state global:', stateGlobal);
  return (
    <NavigationContainer>
        <Router/>
      </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp/>
    </Provider>
  )
}


export default App

const styles = StyleSheet.create({})
