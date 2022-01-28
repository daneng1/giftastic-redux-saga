import { all, call, put, takeEvery } from 'redux-saga/effects'
import searchGifs from '../requests/searchGifs'
import 'regenerator-runtime/runtime'

function* handleGetGifs(data) {
    const search = data.data;
    try {
        const gifs = yield call(searchGifs, search)
        yield all([
            // put({type: 'GET_GIFS_SUCCESS', gifs: gifs}),
            put({type: 'SEARCH_GIFS_SUCCESS', gifs: gifs.data, search})
        ])
    } catch(err) {
        yield put({type: 'GET_GIFS_ERROR', message: err.message})
    }

}

function* watcherSearchSaga() {
    yield takeEvery("SEARCH_GIFS", handleGetGifs)
}

export default watcherSearchSaga;
