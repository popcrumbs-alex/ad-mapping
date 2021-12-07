import "./App.css";
import React, { useReducer } from "react";
import Nav from "./layout/navigation/Nav";
import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";
import Hero from "./layout/hero/Hero";
import MapSection from "./layout/sections/section1/MapSection";
import FormSection from "./layout/sections/section2/FormSection";
import ListingInfo from "./layout/sections/section3/ListingInfo";
import Stats from "./layout/sections/section4/Stats";
import Discover from "./layout/sections/section5/Discover";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import Footer from "./layout/sections/footer/Footer";

export const ThemeContext = React.createContext();

const GlobalStyle = createGlobalStyle`
    body,p,a,h1,h2,h3,h4,h5,h6{
      font-family: Roboto, sans-serif
    }`;

const httpLink = createHttpLink({
  uri: "https://business-ad-mapping-server.herokuapp.com/graphql",
  credentials: "same-origin",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const contextReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_FORM_REF":
      return {
        ...state,
        formSection: payload,
        loading: false,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(contextReducer, {
    colors: {
      main: "#623cea",
      accent: "#03CEA4",
      secondary: "#F06543",
      dark: "#0A1128",
      danger: "#721121",
    },
    formSection: null,
  });

  const value = { state, dispatch };

  return (
    <ApolloProvider client={client}>
      <ThemeContext.Provider value={value}>
        <GlobalStyle />
        <Nav />
        <Hero />
        <MapSection />
        <FormSection />
        <ListingInfo />
        <Stats />
        <Discover />
        <Footer />
      </ThemeContext.Provider>
    </ApolloProvider>
  );
}

export default App;
