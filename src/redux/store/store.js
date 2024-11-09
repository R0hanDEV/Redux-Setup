import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer, userDetailReducer } from "../reducer/reducer";

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    userDetail: userDetailReducer,
  },
});

export default store;
