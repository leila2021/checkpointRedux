import { createStore } from "redux";
import RouterReducer  from "../Reducer/Index";
const devtools =window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const Store = createStore (RouterReducer,devtools);
export default Store;