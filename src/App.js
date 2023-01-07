import { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import SignIn from "./features/Auth/pages/SignIn";
import Photo from "./features/Photo";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyBoIau0oOickUl7Cl4_CnAyh2aB41MIORg",
  authDomain: "photo-app-ed7d9.firebaseapp.com",
  // ...
};
firebase.initializeApp(config);

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        // setIsSignedIn(!!user); //Xu ly tren global state de xac dinh user da signin

        if (!user) {
          console.log("User is not logged in");
          return;
        }
        console.log("Logged in user: ", user.displayName);

        const token = await user.getIdToken();
        console.log("Logged in user token: ", token);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
    <div className="">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Photo />} />
            <Route path="/photos/*" element={<Photo />} />
            <Route path="/sign-in" element={<SignIn />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
