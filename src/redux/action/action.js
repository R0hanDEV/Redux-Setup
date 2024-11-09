import { Types } from "../type/type";

export const setAge = (age) => {
  return {
    type: Types.setAge,
    payload: age,
  };
};

export const setName = (name) => {
  return {
    type: Types.setName,
    payload: name,
  };
};

export const AddTodo = (addTodo) => {
  return {
    type: Types.AddTodo,
    payload: addTodo,
  };
};

export const incrementValue = (value) => {
  return {
    type: Types.IncrementValue,
    payload: value,
  };
};

export const DecrementValue = (value) => {
  return {
    type: Types.DecrementValue,
    payload: value,
  };
};
