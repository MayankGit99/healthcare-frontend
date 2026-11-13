import { call, put, takeLatest } from "redux-saga/effects";

import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "./userSlice";

import { getUsersApi } from "../../services/userService";
import type { User } from "./userTypes";

// Worker Saga
function* fetchUsersWorker(): Generator<any, void, User[]> {
  try {
    // Call API
    const users: User[] = yield call(getUsersApi);

    // Dispatch success action
    yield put(fetchUsersSuccess(users));

  } catch (error) {
    // Dispatch failure action
    const message =
      error instanceof Error
        ? error.message
        : "Something went wrong";

    yield put(fetchUsersFailure(message));
  }
}

// Watcher Saga
export function* watchUsersSaga() {
  yield takeLatest(fetchUsersRequest.type, fetchUsersWorker);
}