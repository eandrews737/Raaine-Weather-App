import { createStore } from "redux";
import { reducer } from "./reducers/dark-sky-reducer";

export default createStore(reducer);
