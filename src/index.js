import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import store from './store/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
