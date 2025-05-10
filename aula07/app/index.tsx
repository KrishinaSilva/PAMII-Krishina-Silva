import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig ={
    apiKey: "AIzaSyAu8e5nlV9L83NQBJPrUqZ-RSn5udlffxs",
  authDomain: "meu-primeiro-1d7c9.firebaseapp.com",
  projectId: "meu-primeiro-1d7c9",
  storageBucket: "meu-primeiro-1d7c9.firebasestorage.app",
  messagingSenderId: "683067560860",
  appId: "1:683067560860:web:8e34b6f5e27ff29d396e59"
};


firebase.initializeApp(firebaseConfig);


import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function App() {
    const [nomes, setNomes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const nomesCollection = firebase.firestore().collection('Nomes');
            const snapshot = await nomesCollection.get();

            const data = [];
            snapshot.forEach((doc) => {
                data.push({ id: doc.id, ...doc.data() });
            });

            setNomes(data);
        };
        fetchData();
    }, []);

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Lista de Nomes:</Text>
            <FlatList
                data={nomes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.Nome} {item.Sobrenome}</Text>
                    </View>
                )}
            />
        </View>
    );
}