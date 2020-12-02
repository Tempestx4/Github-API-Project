import React, { Component } from 'react';
import { Header, Footer } from './layout';
import { Home } from './pages';

class App extends React.Component {
    render() {
      return (
          <main>
              <Header />
              <Home />
              <Footer />
          </main>
      );
    }
  }

export default App;