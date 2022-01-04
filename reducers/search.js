const initialState = {
    search: "",
  };
  
  const search = (state = initialState, action) => {
    switch (action.type) {
      case "SEARCH_GIFS":
        return { ...state, search: action.data, loading: true };
      case "SEARCH_SUCCESS":
        return { ...state, loading: false };
      case "SEARCH_ERROR":
        return { ...state, loading: false, error: action.message };
      default:
        return state;
    }
  };
  
  export default search;
  