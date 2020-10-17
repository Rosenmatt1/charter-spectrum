import { createStore } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

export default createStore(rootReducer, composeWithDevTools())