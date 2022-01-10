import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { randomGif } from "./actions";

export default function Random() {
  const [hideBtn, setHideBtn] = useState(false);
  const dispatch = useDispatch();

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(randomGif);
    setHideBtn(true);
  };

  const gif = useSelector((state) => state.randomGif.gif);

  return (
    <div>
      {hideBtn ? (
        <button onClick={() => handleSubmit(e)}>Get a Random Gif</button>
      ) : (
        <div>
          <img src={gif.images.original.url} alt={gif.title} />
        </div>
      )}
    </div>
  );
}
