import counter from "../Counter";
import gifs from "./gifs";
import search from "./search";
import { combineReducers } from "redux";

const reducers = combineReducers({
    counter,
    gifs,
    search,
});

export default reducers;
