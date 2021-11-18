import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useContext } from "react";
import Nav from "./layout/navigation/Nav";
import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";
import Hero from "./layout/hero/Hero";
import MapSection from "./layout/sections/section1/MapSection";
import FormSection from "./layout/sections/section2/FormSection";
import ListingInfo from "./layout/sections/section3/ListingInfo";

export const ThemeContext = React.createContext({
  colors: {
    main: "#623cea",
    accent: "#03CEA4",
    secondary: "#F06543",
    dark: "#0A1128",
  },
});

const GlobalStyle = createGlobalStyle`
    body,p,a,h1,h2,h3,h4,h5,h6{
      font-family: Roboto, sans-serif
    }`;

function App() {
  const context = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={context}>
      <GlobalStyle />
      <Nav />
      <Hero />
      <MapSection />
      <FormSection />
      <ListingInfo />
    </ThemeContext.Provider>
  );
}

export default App;
