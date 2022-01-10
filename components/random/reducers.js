const initialState = {
  gif: [],
  loading: false,
  error: null,
};

const randomGif = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RANDOM_GIF_SUCCESS":
      return { ...state, gif: [action.gif], loading: false };
    case "GET_RANDOM_GIF_ERROR":
      return { ...state, loading: false, error: action.message };
    default:
      return state;
  }
};

export default randomGif;
