import React from 'react';
// import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
// import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';
import Routes from './src/Routes';
// import AppLoading from 'expo-app-loading';



export default function App() {

  // let [fontsLoaded] = useFonts({
  //   Anton_400Regular,
  // });


  // if(!fontsLoaded) {
  //   return <AppLoading />
  // }

  return (
    <>
      <StatusBar backgroundColor="#38A69D" barStyle="light-content" />
      <Routes />
    </>
  );
}