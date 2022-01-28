import {v4 as uuidv4} from 'uuid';

const initialState = {
    gifs: [],
    search: [],
    loading: false,
    error: null
  };
  
  const search = (state = initialState, action) => {
    // if(action.type === "SEARCH_GIFS_SUCCESS") console.log('action', action);
    switch (action.type) {
      case "SEARCH_GIFS_SUCCESS":
        const found = state.search.some(item => {
          return item.data === action.search.toUpperCase();
        })
        if (found) {
          return {...state, gifs: action.gifs};
          } else {
          return { ...state, gifs: action.gifs, search: [...state.search, {data:action.search.toUpperCase(), id:uuidv4()}] }
        };
      case "SEARCH_ERROR":
        return { ...state, loading: false, error: action.message };
      default:
        return state;
    }
  };
  
  export default search;
  