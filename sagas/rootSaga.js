import { all } from 'redux-saga/effects';
import watcherGifsSaga from './handlers/fetchGifs';
import watchAll from './handlers/counter';
import watcherSearchSaga from './handlers/searchGifs';

export default function* rootSaga() {
    yield all([watcherGifsSaga(), watchAll(), watcherSearchSaga()])
}