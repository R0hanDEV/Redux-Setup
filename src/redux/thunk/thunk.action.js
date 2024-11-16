import { Types } from "../type/type";

const FetchRequest = () => {
  return {
    type: Types.fetchRequest,
  };
};

const FetchSuccess = (data) => {
  return {
    type: Types.fetchSuccess,
    payload: data,
  };
};

const FetchError = (data) => {
  return {
    type: Types.fetchError,
    payload: data,
  };
};

export { FetchError, FetchRequest, FetchSuccess };
