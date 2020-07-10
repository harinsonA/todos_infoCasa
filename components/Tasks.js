import Router from "next/router";
import { deleteTask } from "../store/actions/todoAction";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
const Tasks = ({ tasks }) => {
  const [taskList, setTaskList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (tasks.length) {
      setTaskList(tasks);
    }
  }, [tasks]);

  const handleClick = (event, id) => {
    event.preventDefault();
    if (document.getElementById(id)) {
      dispatch(deleteTask(id));
      document.getElementById(id).remove();
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    const newTasks = tasks.filter(({ title }) => {
      return title.includes(event.target.value);
    });
    setTaskList(newTasks);
  };

  return (
    <>
      <div className="row m-4 sticky-top bg-white">
        <label className="col-12">
          Search:
          <input
            placeholder="Search a task"
            className="form-control col-6"
            onChange={(e) => handleChange(e)}
          ></input>
        </label>
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
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tasks;
