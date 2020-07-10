import Router from "next/router";
import { deleteTask, putTodo } from "../store/actions/todoAction";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
const Tasks = ({ tasks }) => {
  const [taskList, setTaskList] = useState([]);
  const [stateOreder, setStateOrder] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("r");
    if (tasks.length) {
      const newOrder = tasks.sort((a, b) => {
        return stateOreder
          ? Number(a.completed) - Number(b.completed)
          : Number(b.completed) - Number(a.completed);
      });
      setTaskList(newOrder);
    }
  }, [tasks, stateOreder]);

  const handleClick = (event, id) => {
    event.preventDefault();
    if (document.getElementById(id)) {
      dispatch(deleteTask(id));
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    const newTasks = tasks.filter(({ title }) => {
      return title.includes(event.target.value);
    });
    setTaskList(newTasks);
  };

  const handleCheck = (event, task) => {
    event.preventDefault()
    const newobject = {
      userId: task.userId,
      id: task.id,
      title: task.title,
      completed: event.target.checked,
    };
    dispatch(putTodo(newobject));
  };

  const handleOrder = (event) => {
    event.preventDefault()
    const bool = event.target.value == "true";
    console.log(bool);
    setStateOrder(bool);
  };

  return (
    <>
      <div className="row m-2 sticky-top bg-light d-flex">
        <label className="col-7">
          Search:
          <input
            placeholder="Search a task"
            className="form-control "
            onChange={(e) => handleChange(e)}
          ></input>
        </label>
        <div className="col-5 d-flex justify-content-center align-items-center">
          <label className="mr-2">Order by: </label>
          <select onChange={(e) => handleOrder(e)}>
            <option value="true">Task Complete</option>
            <option value="false">Task Incomplete</option>
          </select>
        </div>
      </div>
      <ul>
        {taskList.map((task, i) => (
          <li key={i} id={task.id}>
            <button onClick={(e) => handleClick(e, task.id)}>
              <i className="fas fa-trash-alt"></i>
            </button>
            <label
              name={task.id}
              onClick={(e) => {
                e.preventDefault();
                Router.push("/tasks/[id]", `/tasks/${task.id}`);
              }}
            >
              {task.title}
            </label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={(e) => handleCheck(e, task)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tasks;
