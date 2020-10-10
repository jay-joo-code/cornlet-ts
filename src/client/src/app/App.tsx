import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import theme from './theme';
import Home from 'src/pages/Home';
import rootReducer from 'src/slices';

import './normalise.scss'
import Routes from './Routes'

const loggerMiddleware = process.env.NODE_ENV === 'development' ? [logger] : [];

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), ...loggerMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
})

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;