import React from 'react'
import Search from './components/Search'
import Results from './components/Results'
import './css/styles.css'


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          A simple web app for the "Open Brewery DB" <a className="App-link" href="https://www.openbrewerydb.org">which can be found here!</a>
        </p>
      </header>
      <div className="App">
        <Search store={props.store}/>
        <Results store={props.store}/>
      </div>
    </div>
  );
}

export default App;

