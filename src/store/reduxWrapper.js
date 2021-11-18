import React from 'react';
import { GlobalProvider } from "../context/GlobalContext";
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import rootReducer from '.';

const createStore = () => reduxCreateStore(rootReducer);
export default ({ element }) => (
  <Provider store={createStore()}><GlobalProvider>{element}</GlobalProvider></Provider>
);