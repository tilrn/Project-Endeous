import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.intializeApp({
  apiKey: "AIzaSyAFbv59IDyA-JaBpUSSQLttHxukGCPc8Wg",
  authDomain: "project-endeous.firebaseapp.com",
  projectId: "project-endeous",
  storageBucket: "project-endeous.firebasestorage.app",
  messagingSenderId: "275596414050",
  appId: "1:275596414050:web:0c3f5836a8b9210d3f153b"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <>
    <Router>
    <Navbar /> {/* Add Navbar Component Here */}
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/art" element={<h1>Art Page</h1>} />
      <Route path="/about" element={<h1>About Me</h1>} />
      <Route path="/mail" element={<h1>Mail Page</h1>} />
    </Routes>
  </Router>

  
  </>
  );
}

export default App;
