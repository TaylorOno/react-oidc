import React from 'react';
import './App.css';
import {Loader} from "./components/Loader";
import {useAuth} from "react-oidc-context";
import {Home} from "./components/Home";
import {LoginForm} from "./components/LoginForm";

function App() {
  const auth = useAuth();

  switch (auth.activeNavigator) {
    case "signinSilent":
          return <Loader message="Signing You In" />
    case "signoutRedirect":
          return <Loader message="Signing You Out" />
  }

  if (auth.isLoading) {
    return <Loader message="Loading"/>
  }

  if (auth.error) {
    auth.removeUser()
        .then(()=> {
          setTimeout(() =>  window.location.replace("http://localhost:3000"), 5000)
        })
    return <Loader message={"Oops..." + auth.error.message} />
  }

  if (auth.isAuthenticated) {
    return <Home />;
  }

  return <LoginForm onSubmit={()=> void auth.signinRedirect()}/>
}

export default App;
