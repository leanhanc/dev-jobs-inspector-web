import React from 'react';
import './App.css';
import RootReducer from './shared/store/appReducer';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Header from './components/containers/Header/Header';
import createSagaMiddleware from 'redux-saga';

// Creating Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Creating Redux Store
const store = createStore(RootReducer, {}, composeWithDevTools(applyMiddleware(sagaMiddleware)));

// Run Sagas
// sagaMiddleware.run(appSagas);

const App = () => {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
};

export default App;
