import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import {BrowserRouter} from "react-router-dom";
import axios from "axios"

//!! CUANDO TRABAJO LOCALMENTE, DESCOMENTO LA DE ARRIBA Y VICEVERSA.
// axios.defaults.baseURL= "http://localhost:3001"
axios.defaults.baseURL= "https://api-production-51ff.up.railway.app"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
