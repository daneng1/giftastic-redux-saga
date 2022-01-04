// import Counter from "./Counter";
import React, { useEffect } from "react";
import { getGifs } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Header from "./components/header";
import Footer from "./components/footer";
import Gif from "./components/gif";
import Search from "./components/search";

const Wrapper = styled.div`
    width: 90vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

const Gifs = styled.div`
    // width: 80vw;
    display: flex;
    flex-flow: row wrap;
    margin: 0 auto;
    justify-content: center;
`

export default function App() {
  const dispatch = useDispatch();
  const gifs = useSelector((state) => state.gifs.gifs);
  const loading = useSelector((state) => state.gifs.loading);
  const error = useSelector((state) => state.gifs.error);

  useEffect(() => {
    dispatch(getGifs());
  }, []);

  console.log(gifs.data);

  return (
    <Wrapper>
      <Header />
      <Search />
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      <Gifs>
        {gifs.data &&
          gifs.data.map((gif) => {
            return <Gif gif={gif} key={gif.id}/>;
          })}
      </Gifs>
      <Footer />
    </Wrapper>
  );
}
