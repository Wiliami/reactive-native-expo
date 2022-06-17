import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/Routes';

export default function App() {

  return (
    <>
      <StatusBar backgroundColor="#38A69D" barStyle="light-content" />
      <Routes />
    </>
  );
}