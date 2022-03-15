import HomePage from "./pages/HomePage";
import { createGlobalStyle } from "styled-components";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <HomePage />
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
  font-family:"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


a{
  text-decoration: none;
}

li{
  list-style: none;
}

`;
