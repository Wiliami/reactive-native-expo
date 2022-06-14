import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signin from '../pages/SignIn';
import Welcome from '../pages/Welcome';
import Register from '../pages/Register';
import Home from  '../pages/Home';
// import Detail from '../pages/Detail';



const Stack = createNativeStackNavigator();


export default function Routes () {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="welcome"
                    component={Welcome} 
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="SignIn"
                    component={Signin} 
                    options={{ headerShown: false }}
                />
                
                <Stack.Screen 
                    name="Register"
                    component={Register}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home" 
                    component={Home} 
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}