import React from 'react';
import ReactDOM from 'react-dom';

// create store & rootReducer
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from "./reducers";
// Provider
import { Provider } from 'react-redux'
// Thunk
import thunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';
import App from './App';
import './index.css';

// define store
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

// if you want your app to work offline and load faster, unregister -> register
// PWA service
serviceWorker.unregister();
