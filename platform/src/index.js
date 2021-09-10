import React from 'react';
import ReactDOM from 'react-dom';

// Create store & rootReducer
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from "./modules/reducers";
// Provider
import {Provider} from 'react-redux'
// Persist
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";
// Saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './modules/sagas';
// ServiceWorker
import * as serviceWorker from './serviceWorker';
import App from './App';
import './index.css';
import {createTheme, responsiveFontSizes, ThemeProvider} from "@material-ui/core/styles";

// define saga & store
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
    )
);
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

let theme = createTheme();
theme = responsiveFontSizes(theme);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
