import { all } from 'redux-saga/effects';
import watcherGifsSaga from './handlers/fetchGifs';
import watcherSearchSaga from './handlers/searchGifs';
import watchRandomSaga from '../components/random/sagas';

export default function* rootSaga() {
    yield all([watcherGifsSaga(), watcherSearchSaga(), watchRandomSaga()])
}
