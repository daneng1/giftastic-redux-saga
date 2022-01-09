import React from "react";
import { useSelector, dispatch } from "react-redux";
import { randomGif } from "./actions";

export default function Random () {
    const dispatch = useDispatch()
    const handleSubmit = () => {
        e.preventDefault();
        dispatch(randomGif);
    }

    return (
        <div>
            <button>Get a Random Gif</button>
        </div>
    )
}