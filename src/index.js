import React from 'react';
import ReactDOM from 'react-dom/client';  
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBYTXNxxq82bzvvAb-2S9e8SQdhrJ6NQ9s",
  authDomain: "e-coomerce-hell-awaits.firebaseapp.com",
  projectId: "e-coomerce-hell-awaits",
  storageBucket: "e-coomerce-hell-awaits.appspot.com",
  messagingSenderId: "737814067508",
  appId: "1:737814067508:web:a824c5fd03e7505f914d61",
  measurementId: "G-FY1B3W37JT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);