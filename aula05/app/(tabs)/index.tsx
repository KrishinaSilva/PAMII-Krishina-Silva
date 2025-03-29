// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';

//informações do meu firebase
const firebaseConfig = {
  apiKey: "AIzaSyBFhtq8lUexiX07JHKXIOMkHk-qb3hVlC8",
  authDomain: "meu-primeiro-projeto-bffeb.firebaseapp.com",
  projectId: "meu-primeiro-projeto-bffeb",
  storageBucket: "meu-primeiro-projeto-bffeb.firebasestorage.app",
  messagingSenderId: "424709289689",
  appId: "1:424709289689:web:67a6a70c14b70e5f1a70c8"
};

// firebase.initializeApp(firebaseConfig);

// import React, { useEffect, useState } from 'react';
// import {View, Text, FlatList} from 'react-native';

// export default function App() {
// const [nomes, setNomes] = useState([]);

// useEffect(() => {
	//const fetchData = async () => {
		//const nomesCollection = firebase.firestore().collection('Nomes');
		//const snapshot = await nomesCollection.get();

		//const data = [];
		//snapshot.forEach((doc) => {
		  //data.push({ id: doc.id, ...doc.data() });
        //        });

	//setNomes(data);
 //};
		
 //fetchData();
//},[]);

 //return (
   //<View style = {{flex: 1, justifyContent: 'center',
   //alignItems: 'center' }}>
   //<Text>Lista de Nomes:</Text>
   //<FlatList
    //data={nomes}
    //keyExtractor={(item) => item.id}
    //renderItem={({ item }) => (
     //<View>
      //<Text>{item.Nome} {item.Sobrenome}</Text>
    //</View>