import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebaseConnection';

export default function Register() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function createUser() {
        await createUserWithEmailAndPassword(auth, email, password)
        .then(value => {
            console.log('cadastrado com sucesso!\n' + value.user.uid);
        })
        .catch(error => console.log(error));
    };

    return (
        <View style={styles.container}>
                <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                    <Text style={styles.message}>Faça seu cadastro</Text>
                </Animatable.View>

                <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                    <Text style={styles.title}>Email</Text>
                    <TextInput 
                    placeholder="Digite um e-mail..."
                    style={styles.input}
                    value={email}
                    onChangeText={value => setEmail(value)} 
                    />

                    <Text style={styles.title}>Senha</Text>
                    <TextInput 
                    placeholder="Digite uma senha..."
                    style={styles.input}
                    value={password}
                    onChangeText={value => setPassword(value)} 
                    />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}
                        onPress={ () => createUser()}
                        >
                            Cadastrar
                        </Text>
                    </TouchableOpacity>
                </Animatable.View>

            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69d',      
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        padding: '5%',
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
})