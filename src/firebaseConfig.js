import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAwvak5KoEchFz76sK1my6-FOwguvcguWI",
  authDomain: "task-management-e8f0f.firebaseapp.com",
  projectId: "task-management-e8f0f",
  storageBucket: "task-management-e8f0f.appspot.com",
  messagingSenderId: "194423127119",
  appId: "1:194423127119:web:cc803cb5bea1ce17b2fe3a",
  measurementId: "G-0V99JM4V9H",
  databaseURL:"https://task-management-e8f0f-default-rtdb.firebaseio.com/",
  storageBucket:"gs://task-management-e8f0f.appspot.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const storage = getStorage(app);


