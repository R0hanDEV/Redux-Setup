import axios from "axios";

import { FetchError, FetchRequest, FetchSuccess } from "./thunk.action";

export const FetchAPIthunk = () => {
  return async (dispatch) => {
    dispatch(FetchRequest());
    try {
      const response = await axios.get("https://fakestoreapi.com/products/");
      dispatch(FetchSuccess(response));
    } catch (error) {
      dispatch(FetchError(error.message));
    }
  };
};
