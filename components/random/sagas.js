import { call, put, takeEvery } from "redux-saga/effects";

const url = "https://api.giphy.com/v1/gifs/random?api_key=Eez8YyeMjt1lelM8ivg7c8fiSkl5sSyf&&rating=r";

function* handleGetRandomGif() {
  try {
    const gif = yield call(
       fetch(url, {
        method: "GET",
      })
      .then(response => response.json()
      .catch(error => {throw error}))
    )
    yield put({ type: 'GET_RANDOM_GIF_SUCCESS', gif: gif})
  } catch(err) {
    yield put({ type: "GET_RANDOM_GIF_ERROR", message: err.message})
  }
}

function* watchRandomSaga() {
  yield takeEvery("GET_RANDOM_GIF", handleGetRandomGif)
}

export default watchRandomSaga;
