import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import store from './store/store'
import { Provider } from 'react-redux'
import WebGazer from "./components/WebGazer/WebGazer";

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <AuthContextProvider>
      <App />
      <WebGazer/>
    </AuthContextProvider>
  </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
