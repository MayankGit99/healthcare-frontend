import { all, fork } from "redux-saga/effects";
import { watchUsersSaga } from "../features/users/userSaga";

export default function* rootSaga() {
  yield all([
    fork(watchUsersSaga),
  ]);
}