import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from "./reducers";

// redux
const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunkMiddleware, loggerMiddleware)(createStore);
const storeApp = createStoreWithMiddleware(reducers); 
export default storeApp;