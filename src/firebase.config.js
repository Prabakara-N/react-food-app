import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6O8RMVyCa9JleUh8qGkGSf46SFsiWaNg",
  authDomain: "react-crud-firebase-522a8.firebaseapp.com",
  databaseURL: "https://react-crud-firebase-522a8-default-rtdb.firebaseio.com",
  projectId: "react-crud-firebase-522a8",
  storageBucket: "react-crud-firebase-522a8.appspot.com",
  messagingSenderId: "777051854513",
  appId: "1:777051854513:web:d28ae157c50ea31197f490",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
