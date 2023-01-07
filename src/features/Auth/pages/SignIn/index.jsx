import React from "react";
import firebase from "firebase/compat/app";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebase/compat/auth";

// SignIn.propTypes = {};

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "redirect",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: "/photos",
};

const SignIn = () => {
  return (
    <div>
      <div className="text-center">
        <h2>Login Form</h2>
        <p>or login with social accounts</p>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </div>
  );
};

export default SignIn;
