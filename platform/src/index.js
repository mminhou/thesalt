import React from 'react';
import ReactDOM from 'react-dom';

// create store & rootReducer
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from "./modules/reducers";
// Provider
import { Provider } from 'react-redux'
// Saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './modules/sagas';
// import thunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';
import App from './App';
import './index.css';

// define saga & store
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
sagaMiddleware.run(rootSaga);

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
