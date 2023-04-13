import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

let config = {
  apiKey: "AIzaSyACWw5p32QHNr95ZOGEMp733A3MMrKje8g",
  authDomain: "dndrealtime.firebaseapp.com",
  projectId: "dndrealtime",
  storageBucket: "dndrealtime.appspot.com",
  messagingSenderId: "429498461703",
  appId: "1:429498461703:web:7460251dc4f9def5b784a2",
  databaseURL: "https://dndrealtime-default-rtdb.europe-west1.firebasedatabase.app"
};

const app = initializeApp(config);
export const db = getDatabase(app);