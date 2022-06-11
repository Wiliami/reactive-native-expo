import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Dot from '../../components/Dot';

export default function Detail ( {navigation} ) {

  navigation.setOptions({
    headerTitle: 'video youtube'
  })

  return (
    <ScrollView>
        <Image 
        source={require('../../assets/detail.png')}
        style={styles.image}
        resizeMode="cover"
        />


        <View> 
          <View>  
            <Text style={[styles.title, { fontSize: 24 }]}>R$280,90</Text>
          </View>
          <View opacity={0.4}>  
            <Text style={[styles.title, { fontSize: 30 }]}>Nike Downshifter 10</Text>
          </View>

          <View style={styles.dotContainer}>
            <Dot color="#2379f4"/> 
            <Dot color="#fb6e53"/> 
            <Dot color="#ddd"/> 
            <Dot color="#000"/> 

          </View>
        </View>
    </ScrollView>
 );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
  },
  image: {
    width: '100%',
  },
  title: {
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%',  
  },
  dotContainer: {
    flexDirection: 'row',
    marginVertical: '7%',
  }
})