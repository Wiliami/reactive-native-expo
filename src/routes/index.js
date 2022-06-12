import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signin from '../pages/SignIn';
import Welcome from '../pages/Welcome';
import Home from  '../pages/Home';
import Detail from '../pages/Detail';



const Stack = createNativeStackNavigator();


const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="signin"
                    component={Signin} 
                    options={{ headerShown: false }}
                />
                 <Stack.Screen 
                    name="welcome"
                    component={Welcome} 
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="Home"
                    component={Home} 
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Detail" 
                    component={Detail} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// notas
export default Routes;