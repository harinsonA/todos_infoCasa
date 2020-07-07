import Router from "next/router";
const Tasks = ({ tasks }) => {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" name={task.id} id={task.id} />
            <label
              htmlFor={task.id}
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
