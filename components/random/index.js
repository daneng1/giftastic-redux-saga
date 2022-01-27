import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { randomGif } from "./actions";
import styled from "styled-components";

const Modal = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    position: fixed; 
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 80vh;
    top: 20vh;
    left: 0;
    background-color: rgba(255,255,255, .8);
    z-index: 2;
`;

const Image = styled.img`
    position: relative;
    margin: 0 auto;
    width: 60vw;
    z-index: 3;
`;

const Button = styled.button`
    width: 25px;
    height: 25px;
    border-radius: 5px;
    z-index: 3;
`

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
    <Modal >
      <button onClick={(e) => handleSubmit(e)}>Get a Random Gif</button>
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {gif.length > 0 && showModal && (
          <Container>
            <Image src={gif[0].images.original.url} alt={gif[0].title} />
            <Button onClick={() => setShowModal(false)}>X</Button>
          </Container>
      )}
    </Modal>
  );
}
