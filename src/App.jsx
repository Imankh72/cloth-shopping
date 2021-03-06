import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { auth, createUserProfile } from "./firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { userActionTypes } from "./redux/user/userActionTypes";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import NotFoundPage from "./pages/NotFoundPage";

import Header from "./components/Header";
import SignInPage from "./pages/SignInPage";
import CheckoutPage from "./pages/CheckoutPage";
import CollectionPage from "./pages/CollectionPage";

import { createGlobalStyle } from "styled-components";

const App = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        await createUserProfile(userAuth);
      }
      dispatch({ type: userActionTypes.SET_CURRENT_USER, payload: userAuth });
    });

    return () => {
      unSubscribe();
    };
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route
          path="/sign-in"
          element={currentUser ? <Navigate to="/" replace /> : <SignInPage />}
        />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/shop/:categoryName" element={<CollectionPage />} />
        <Route path="*" element={<NotFoundPage />} />
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
  --color-google-blue:#228be6;

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
  user-select:none;
  padding: 20px 40px;
}

a{
  text-decoration: none;
}

li{
  list-style: none;
}

@media screen and (max-width:992px) {
  body{
    padding: 10px;
  }
}
`;
