import React from 'react'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'

const Router = () => {
  return (
    <Provider store={store}>
        <App />
    </Provider>
  )
}

export default Router

