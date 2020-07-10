import * as types from "../types";
import axios from "axios";

export const fetchTodos = () => async (dispatch) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  dispatch({
    type: types.SET_TODOS,
    payload: res.data,
  });
};
export const postTodo = (todo) => async (dispatch) => {
  const res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
    data: todo,
  });
  dispatch({
    type: types.POST_TODO,
    payload: todo,
  });
};
export const putTodo = (todo) => async (dispatch) => {
  const res = await axios.put(
    `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
    {
      data: todo,
    }
  );

  dispatch({
    type: types.PUT_TODO,
    payload: todo,
  });
};
export const getTask = async (id) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  return res.data;
};
export const deleteTask = (id) => async (dispatch) => {
  const res = await axios.delete(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {
      data: id,
    }
  );
  dispatch({
    type: types.DELETE_TODO,
    payload: id,
  });
};
