import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import userReducer from "../features/users/userSlice";
import rootSaga from "./rootSaga";

// Create Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure Redux store
export const store = configureStore({
  reducer: {
    users: userReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
    }).concat(sagaMiddleware),
});

// Run root Saga
sagaMiddleware.run(rootSaga);

// TypeScript types
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;