import gifs from "./gifs";
import search from "./search";
import { combineReducers } from "redux";

const reducers = combineReducers({
    gifs,
    search,
});

export default reducers;
