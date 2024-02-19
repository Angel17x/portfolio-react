// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqOhXQ4KHGPqqr2pLuwttjTM6xHgwjg4E",
  authDomain: "portfolio-data-534dc.firebaseapp.com",
  projectId: "portfolio-data-534dc",
  storageBucket: "portfolio-data-534dc.appspot.com",
  messagingSenderId: "1038293793629",
  appId: "1:1038293793629:web:007ed3ed3ce13c209e86b4",
  measurementId: "G-LDH7VH750D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Export the services for use in other parts of your application
export { app, db, analytics };