import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import { Routes, Route } from "react-router-dom";

import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import SignInPage from "./pages/SignInPage";
import { useEffect, useState } from "react";
import { auth } from "./utils/firebase";

import { onSnapshot } from "firebase/firestore";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user);
    });

    return () => {
      onSnapshot();
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </>
  );
};

export default App;

const GlobalStyles = createGlobalStyle`

:root{
  /* Colors Variables */
  --color-black:#000;
  --color-white:#fff;
  --color-grey-1:#343a40;
  --color-grey-2:#868e96;
  --color-grey-3:#212529;

  /* Const Sizes */
  --maxWidth:1200px;
}

*,*::after,*::before{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: var(--color-grey-1);
}

body {
  font-family:  "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  padding: 20px 60px;
}


a{
  text-decoration: none;
}

li{
  list-style: none;
}

`;
