import { call, put, takeLatest, fork, all } from "redux-saga/effects";
import {} from "./actions";

function* fetchGif() {}

function* watchFetchGif() {}

export default function* rootSaga() {
  yield all([watchFetchGif]);
}
