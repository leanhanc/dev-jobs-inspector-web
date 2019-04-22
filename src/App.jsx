import React from 'react';
import './App.css';
import RootReducer from './shared/store/appReducer';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Header from './components/containers/Header/Header';
import MainContent from './components/containers/MainContent/MainContent';
import Footer from './components/containers/Footer/Footer';

import createSagaMiddleware from 'redux-saga';
import appSagas from './shared/sagas/';

const defaultState = {
  dateFilter: 30,
  locationFilter: ''
};

// Creating Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Creating Redux Store
const store = createStore(
  RootReducer,
  // @ts-ignore
  defaultState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(appSagas);

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <MainContent />
      <Footer />
    </Provider>
  );
};

export default App;
