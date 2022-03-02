import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { Header } from "./Header/Header";
import { store } from "../../store/store";
import { Router } from "./Routes/Router";

export const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Provider store={store}>
          <Header />
          <Router />
        </Provider>
      </HashRouter>
    </div>
  );
};
