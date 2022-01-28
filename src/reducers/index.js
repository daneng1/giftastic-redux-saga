import gifs from "./gifs";
import search from "./search";
import randomGif from "../components/random/reducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
    gifs,
    search,
    randomGif
});

export default reducers;
