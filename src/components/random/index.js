import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { randomGif, clearRandomGif } from "./actions";

export default function Random() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(randomGif());
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    dispatch(clearRandomGif());
  }

  const gif = useSelector((state) => state.randomGif.gif);
  const loading = useSelector((state) => state.randomGif.loading);
  const error = useSelector((state) => state.randomGif.error);

  return (
    <div >
      <button onClick={(e) => handleSubmit(e)}>Get a Random Gif</button>
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {gif.length > 0 && showModal && (
          <div>
            <image src={gif[0].images.original.url} alt={gif[0].title} />
            <button onClick={handleClose}>X</button>
          </div>
      )}
    </div>
  );
}
