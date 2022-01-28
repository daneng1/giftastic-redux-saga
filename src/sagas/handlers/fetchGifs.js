import { call, put, takeEvery } from 'redux-saga/effects'
import getGifs from '../requests/fetchGifs'
import 'regenerator-runtime/runtime'

function* handleGetGifs() {
    try {
        const gifs = yield call(getGifs)
        yield put({type: 'GET_GIFS_SUCCESS', gifs: gifs})
    } catch(err) {
        yield put({type: 'GET_GIFS_ERROR', message: err.message})
    }

}

function* watcherGifsSaga() {
    yield takeEvery("GET_GIFS", handleGetGifs)
}

export default watcherGifsSaga;
