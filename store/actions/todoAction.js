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
  console.log(res)
  dispatch({
    type: types.POST_TODO,
    payload: todo,
  });
};
export const putTodo = (todo) => async (dispatch) => {
  const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
    data: todo,
  });
  console.log(res)
  dispatch({
    type: types.PUT_TODO,
    payload: todo,
  });
};
