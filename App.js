import React from 'react';
import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';
import Routes from './src/routes/router';
import AppLoading from 'expo-app-loading';



function App() {

  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });


  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style="auto" backgroundColor="#fff" />
      <Routes />
    </>
  );
}


 export default App;