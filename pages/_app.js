import React from 'react';
import NextApp from 'next/app';
import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root, #__next {
    height: 100%;
  }
  body {
    background: #f0f0f0;
    font-family: "Open Sans", Arial, Helvetica, sans-serif;
  }
  a {
    color: #5FB8A4;
  }
  ::-moz-selection { /* Code for Firefox */
    background: #77FCDE;
  }
  ::selection {
    background: #77FCDE;
  }
  input, textarea {
    border: none;
    outline: none;
  }
`;

export default class App extends NextApp {
  render(){
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
        <GlobalStyle />
      </>
    );
  }
}