import App, { Container } from "next/app";
import React from "react";
import { StoreProvider } from "../Store";
import "../styles/index.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </Container>
    );
  }
}

export default MyApp;
