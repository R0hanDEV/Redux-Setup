import { Types } from "../type/type";

const initialValue = {
  value: 0,
};

const userInitialValue = {
  name: "",
  age: null,
};

const FetchAPIdata = {
  loading: false,
  data: null,
  error: null,
};

const FetchAPIReducer = (state = FetchAPIdata, action) => {
  switch (action.type) {
    case Types.fetchRequest:
      return {
        ...state,
        loading: true,
      };
    case Types.fetchSuccess:
      return {
        loading: false,
        data: action.payload,
        error: null,
      };
    case Types.fetchError:
      return {
        loading: false,
        error: action.payload,
        data: null,
      };
    default:
      return state;
  }
};

const userDetailReducer = (state = userInitialValue, action) => {
  switch (action.type) {
    case Types.setName:
      return {
        ...state,
        name: action.payload,
      };
    case Types.setAge:
      return {
        ...state,
        age: action.payload,
      };
    default:
      return state;
  }
};
const AddTodoReducer = (state = initialValue, action) => {
  switch (action.type) {
    case Types.AddTodo:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
const CounterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case Types.IncrementValue:
      return {
        ...state,
        value: state.value + 1,
      };
    case Types.DecrementValue:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

export { AddTodoReducer, CounterReducer, userDetailReducer, FetchAPIReducer };
