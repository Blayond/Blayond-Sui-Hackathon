
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics"; // Added isSupported

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfTYiYF9Kcg8Us2URyuMdImzJCfPPXcR4",
  authDomain: "blayond-running-app.firebaseapp.com",
  projectId: "blayond-running-app",
  storageBucket: "blayond-running-app.firebasestorage.app",
  messagingSenderId: "703075758707",
  appId: "1:703075758707:web:b988de7449d429898f3006",
  measurementId: "G-F1MFJKVXYZ"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// Initialize Analytics only on the client side where it's supported
let analytics;
if (typeof window !== 'undefined' && firebaseConfig.measurementId) {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export const auth = getAuth(app);
export { app, analytics }; // Export app and analytics if needed elsewhere
// You can export other Firebase services here if needed, e.g., firestore
// export const db = getFirestore(app);
