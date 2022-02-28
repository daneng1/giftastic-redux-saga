import React, { useEffect } from "react";
import { getGifs } from "./actions";
import { useSelector, useDispatch } from "react-redux";

import Header from "./components/header";
import Footer from "./components/footer";
import Gif from "./components/gif";
import Search from "./components/search";
import Random from './components/random'

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
    <div 
    style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', width: "100vw", height: "100vh", margin: 'auto'}}
    className="flex flex-col justify-center flex-auto">
      <Header />
      <Random />
      <Search />
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {/* {searchGifs.length > 0 && (
        <div className="flex flex-row">
          <h1 className="font-mono text-xl">Search Results</h1>
          <div className="h-10 w-80 flex flex-row mx-auto">
            {searchGifs.map((gif) => {
              return <Gif gif={gif} key={gif.id} />;
            })}
          </div>
        </div>
      )} */}
      <h1 className="text-xl">Trending</h1>
      {/* <div className="w-full h-1/3 flex flex-row overscroll-auto mx-auto">
        {trendingGifs.data &&
          trendingGifs.data.map((gif) => {
            return <Gif gif={gif} key={gif.id} />;
          })}
      </div> */}
      <Footer />
    </div>
  );
}
