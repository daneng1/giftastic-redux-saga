import { call, put, takeEvery } from 'redux-saga/effects'
import searchGifs from '../requests/searchGifs'
import 'regenerator-runtime/runtime'

function* handleGetGifs(data) {
    // console.log('inside handler',data.data)
    try {
        const gifs = yield call(searchGifs, data)
        yield put({type: 'GET_GIFS_SUCCESS', gifs: gifs})
    } catch(err) {
        yield put({type: 'GET_GIFS_ERROR', message: err.message})
    }

}

function* watcherSearchSaga() {
    yield takeEvery("SEARCH_GIFS", handleGetGifs)
}

export default watcherSearchSaga;
