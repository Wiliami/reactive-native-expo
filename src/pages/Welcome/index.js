import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';



export default function Welcome() {
  return (
    <View style={styles.container}>
      
      <View>
        <Image 
        source={require('../../assets/logo-teste.jpg')}
        />
      </View>

    </View>
  );
}