import React, { useEffect } from "react";
import { getGifs } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Header from "./components/header";
import Footer from "./components/footer";
import Gif from "./components/gif";
import Search from "./components/search";
import Random from './components/random'

const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
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
    <div class="w-9/10 h-1/1 mx-auto flex-col">
      <Header />
      <Random />
      <Search />
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {searchGifs.length > 0 && (
        <>
          <h1 class="font-mono text-xl">Search Results</h1>
          <div class="h-10 w-80 flex-row mx-auto">
            {searchGifs.map((gif) => {
              return <Gif gif={gif} key={gif.id} />;
            })}
          </div>
        </>
      )}
      <h1 class="font-mono text-xl">Trending</h1>
      <div class="w-4/5 h-1/3 flex-row overscroll-auto mx-auto">
        {trendingGifs.data &&
          trendingGifs.data.map((gif) => {
            return <Gif gif={gif} key={gif.id} />;
          })}
      </div>
      <Footer />
    </div>
  );
}
