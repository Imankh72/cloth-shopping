import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import { Routes, Route } from "react-router-dom";

import { createGlobalStyle } from "styled-components";
import { shopData } from "./data/shopData";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </>
  );
};

export default App;

const GlobalStyles = createGlobalStyle`


:root{
  --color-black:#000;
  --color-white:#fff;
  --color-grey-1:#4a4a4a;
}

*,*::after,*::before{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-grey-1);
  padding: 20px 60px;
}


a{
  text-decoration: none;
}

li{
  list-style: none;
}

`;
