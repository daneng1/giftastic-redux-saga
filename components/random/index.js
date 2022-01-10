import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { randomGif } from "./actions";
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(255,255,255, .8)
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
`;

const Modal = styled.div`
    margin: 0 auto;
`;

const Image = styled.img`
  width: 60vw;
`;

export default function Random() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(randomGif());
    setShowModal(true);
  };

  const gif = useSelector((state) => state.randomGif.gif);
  const loading = useSelector((state) => state.randomGif.loading);
  const error = useSelector((state) => state.randomGif.error);

  return (
    <div>
      <button onClick={(e) => handleSubmit(e)}>Get a Random Gif</button>
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {gif.length > 0 && showModal && (
          <Container>
            <Modal>
            <Image src={gif[0].images.original.url} alt={gif[0].title} />
            <button onClick={() => setShowModal(false)}>X</button>
            </Modal>
          </Container>
      )}
    </div>
  );
}
