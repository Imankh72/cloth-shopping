import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import { Routes, Route } from "react-router-dom";

import { createGlobalStyle } from "styled-components";
import { shopData } from "./data/shopData";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
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
  --color-grey-1:#343a40;
  --color-grey-2:#868e96;
  --color-grey-3:#212529;
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
