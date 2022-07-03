// import { doc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


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
      return (
        <>
          <ScrollView>
            <Text style={styles.text} key={task.descricao}>{task.descricao}</Text>
            <Text style={styles.text} key={task.pontuacao}>{task.pontuacao}</Text>
            <Text style={styles.text} key={task.texto}>{task.texto}</Text>
          </ScrollView>

          <Text>ola, mundo</Text>
        </>
      )
    })}
   </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 40,
    marginLeft: 20
  }
})