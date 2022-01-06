import {v4 as uuidv4} from 'uuid';

const initialState = {
    search: [],
    loading: false,
    error: null
  };
  
  const search = (state = initialState, action) => {
    const newSearch = action.search
    switch (action.type) {
      case "SEARCH_GIFS_SUCCESS":
        return { search: [...state.search, {data:action.search, id:uuidv4()}] };
      case "SEARCH_ERROR":
        return { ...state, loading: false, error: action.message };
      default:
        return state;
    }
  };
  
  export default search;
  