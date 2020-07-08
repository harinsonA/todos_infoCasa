import * as types from "../types";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TODOS:
      return {
        ...state,
        todos: action.payload,
        loading: false,
        error: null,
      };
    case types.POST_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
