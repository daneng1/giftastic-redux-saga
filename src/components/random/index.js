import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { randomGif, clearRandomGif } from "./actions";
import styled from "styled-components";

const Modal = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    position: absolute; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(255,255,255, .8);
    z-index: 3;
`;

const Image = styled.img`
    height: 60vh;
    z-index: 3;
`;

const Button = styled.button`
    position: fixed;
    top: 30px;
    right: 30px;
    width: 35px;
    height: 35px;
    border-radius: 17px;
    z-index: 4;
`

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
    <Modal >
      <button onClick={(e) => handleSubmit(e)}>Get a Random Gif</button>
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {gif.length > 0 && showModal && (
          <Container>
            <Image src={gif[0].images.original.url} alt={gif[0].title} />
            <Button onClick={handleClose}>X</Button>
          </Container>
      )}
    </Modal>
  );
}
