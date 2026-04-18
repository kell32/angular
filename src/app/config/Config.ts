
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAEDHsGtG29wWjCPAmgcJnbDF429MDq2Cc",
  authDomain: "complexivo-e88ee.firebaseapp.com",
  databaseURL: "https://complexivo-e88ee-default-rtdb.firebaseio.com",
  projectId: "complexivo-e88ee",
  storageBucket: "complexivo-e88ee.firebasestorage.app",
  messagingSenderId: "130865514075",
  appId: "1:130865514075:web:87d3a6410a67f7be6f217e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app)
