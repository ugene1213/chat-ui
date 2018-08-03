
//This is then entry point for your app. Do as you wish.

import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import "./index.scss";
import App from "./components";
import reducer from './store/reducer';

const store = createStore(reducer);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
