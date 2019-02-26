import React from 'react';

import { Header, Main, Footer } from './components';
// import Header from './components/Header';

import './index.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      language: 'en',
    };
  }

  render() {
    const { language } = this.state;
    return (
      <React.Fragment>
        <div className="App">
          <Header
            onLanguage={lang => this.setState({ language: lang })}
            language={language}
          />
          <Main language={language} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
