import React from 'react';

import { Header, Main, Footer } from './components';
// import Header from './components/Header';

import './index.scss';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <Main />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
