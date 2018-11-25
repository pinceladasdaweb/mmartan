import React, { Component } from 'react';

import { createGlobalStyle } from 'styled-components';

import Header from './components/header/header';
import Main from './components/main/Main';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    min-height: 100vh;
    height: 100%;
  }

  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  * {
    &,
    &::after,
    &::before {
      box-sizing: inherit;
    }
  }

  body {
    padding: 0;
    margin: 0;
    font: 1rem / 1.414 Lato, arial, sans-serif;
    text-rendering: optimizeLegibility;
  }

  .clearfix::after {
    content: "";
    clear: both;
    display: table;
  }
`

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Main />
      </>
    );
  }
}

export default App;
