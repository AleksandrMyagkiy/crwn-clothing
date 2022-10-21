import { all, call } from 'redux-saga/effects';

import { categoriesSaga } from './categories/category.saga';

export function* rootsaga() {
    yield all([call(categoriesSaga)]);
};