import React from 'react';
import ReactDOM from 'react-dom';

// create store & rootReducer
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from "./modules/reducers";
// Provider
import { Provider } from 'react-redux'
// Persist
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
// Saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './modules/sagas';

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
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
        </PersistGate>
    </Provider>,
  document.getElementById('root')
);

// if you want your app to work offline and load faster, unregister -> register
// PWA service
serviceWorker.unregister();
