import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Splash, SplashCopy, Beranda, Lokasi, Jemaat } from '../pages';
import { BottomNavigator } from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props}/>}>
            <Tab.Screen name='Beranda' component={Beranda} options={{headerShown: false}} />
            <Tab.Screen name='Lokasi' component={Lokasi} options={{headerShown: false}} />
            <Tab.Screen name='Jemaat' component={Jemaat} options={{headerShown: false}} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='MainApp'>
            <Stack.Screen 
                name='Splash' 
                component={Splash} 
                options={{headerShown: false}} />
            
            <Stack.Screen
                name='SplashCopy'
                component={SplashCopy}
                />
            
            <Stack.Screen
                name='MainApp'
                component={MainApp}
                options={{headerShown: false}} />
        </Stack.Navigator>
    );
};

export default Router;