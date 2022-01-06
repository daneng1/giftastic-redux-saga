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
  width: 80vw;
  height: 44vh;
  overflow: scroll;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  // justify-content: center;
`;

const SearchGifs = styled.div`
  height: 44vh;
  width: 80vw;
  overflow: scroll;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  // justify-content: center;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

export default function App() {
  const dispatch = useDispatch();
  const trendingGifs = useSelector((state) => state.gifs.gifs);
  const searchGifs = useSelector((state) => state.search.gifs);
  const loading = useSelector((state) => state.gifs.loading);
  const error = useSelector((state) => state.gifs.error);

  useEffect(() => {
    dispatch(getGifs());
  }, []);

  return (
    <Wrapper>
      <Header />
      <Search />
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {searchGifs.length > 0 && (
        <>
          <Title>Search Results</Title>
          <SearchGifs>
            {searchGifs.map((gif) => {
              return <Gif gif={gif} key={gif.id} />;
            })}
          </SearchGifs>
        </>
      )}
      <Title>Trending</Title>
      <Gifs>
        {trendingGifs.data &&
          trendingGifs.data.map((gif) => {
            return <Gif gif={gif} key={gif.id} />;
          })}
      </Gifs>
      <Footer />
    </Wrapper>
  );
}
