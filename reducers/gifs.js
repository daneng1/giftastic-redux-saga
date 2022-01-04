const initialState = {
  gifs: [],
  loading: false,
  error: null,
};

const gifs = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_GIFS":
      return { ...state, loading: true };
    case "GET_GIFS_SUCCESS":
        console.log('reducer',action.gifs);
      return { ...state, gifs: action.gifs, loading: false };
    case "GET_GIFS_ERROR":
      return { ...state, loading: false, error: action.message };
    default:
      return state;
  }
};

export default gifs;
