import React from 'react';
import NextApp from 'next/app';
import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';
import NProgress from 'nextjs-progressbar';

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
        {'<!-- Global site tag (gtag.js) - Google Analytics -->'}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-160028392-3"></script>
        <script>{
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-160028392-3');`
       }</script>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <NProgress
          color="#51C7AC"
          startPosition="0.6"
          stopDelayMs="0"
          height="5"
        />
        <Component {...pageProps} />
        <GlobalStyle />
      </>
    );
  }
}