import { configureStore } from "@reduxjs/toolkit";
import {
  CounterReducer,
  FetchAPIReducer,
  userDetailReducer,
} from "../reducer/reducer";
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    userDetail: userDetailReducer,
    apiData: FetchAPIReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
