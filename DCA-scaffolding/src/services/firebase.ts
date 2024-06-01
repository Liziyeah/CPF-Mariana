import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { VinilInfo
 } from "../types/Vinil";
 
const firebaseConfig = {
	apiKey: 'AIzaSyA-_mnUQ4kNNi61f71pe2gDONwYaqqzDKA',
	authDomain: 'lab6-prueba.firebaseapp.com',
	projectId: 'lab6-prueba',
	storageBucket: 'lab6-prueba.appspot.com',
	messagingSenderId: '794296916530',
	appId: '1:794296916530:web:3ca7713fdbd351e267ba2b',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addVinil = async (formData: Omit<VinilInfo, 'id'>) => {
	try {
		const docRef = await addDoc(collection(db, 'vinils'), formData);
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const getVinils = async () => {
	const querySnapshot = await getDocs(collection(db, 'vinils'));
	const arrayCards: Array<VinilInfo> = [];
	querySnapshot.forEach((doc) => {
		const data = doc.data() as any;
		arrayCards.push({ id: doc.id, ...data });
	});
	return arrayCards;
};