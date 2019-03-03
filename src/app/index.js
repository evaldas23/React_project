import React from 'react';
import { Header, Main, Footer, ErrorBoundary } from './components';
// import Header from './components/Header';
import './index.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      language: 'en',
      showHeader: true,
      error: false,
    };
  }
  componentDidCatch(error, info) {
this.setState({ error: true });
console.log('ERROR', error);
console.log('INFO', info);
  }

  render() {
    const { language, showHeader, error } = this.state;
    
    if (error) {
      return <div>Oooops! Something Wrong!</div>
    }

    return (
      <ErrorBoundary
        message= {
          <div><h1>Ooooop</h1></div>
        }>

        <div className="App">
          <button
            type="button"
            onClick={() =>
              this.setState(state => ({ showHeader: !state.showHeader }))
            }
          >
            <span role="img" aria-label="hide header">
              {showHeader ? '❌' : '✔️'}
            </span>
          </button>
          {showHeader && (
            <Header
              onLanguage={lang => this.setState({ language: lang })}
              language={language}
            />
          )}
          <Main language={language} />
        </div>
        <Footer />
      </ErrorBoundary>
    );
  }
}

export default App;
