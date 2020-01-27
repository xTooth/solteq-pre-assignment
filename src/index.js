import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import searchReducer from './reducers/searchReducer'

const store = createStore(searchReducer);

const renderApp = () => {
ReactDOM.render(<App store={store}/>, document.getElementById('root'));
serviceWorker.unregister();
}

renderApp()
store.subscribe(renderApp)

