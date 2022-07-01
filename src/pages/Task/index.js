// import { doc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';


import { database } from '../../services/firebaseConnection';

export default function Task() {
  const [ tasks, setStack ] = useState([]);

 

  useEffect(() => {
    database.collection('Tasks').onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push(doc.data());
      })
      setStack(list);
    })
  }, []);

 return (
   <View>
    {tasks.map((task) => {
      return <Text style={styles.text} key={task.descricao}>{task.descricao}</Text>
    })}
   </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 40
  }
})