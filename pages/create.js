import Container from "../components/Container";
import { postTodo } from "../store/actions/todoAction";
import { useDispatch } from "react-redux";
import Link from "next/link";

const Create = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = event.target.task.value;
    if (task && task.length != 0) {
      const object = {
        userId: 1,
        title: task,
        completed: false,
      };
      dispatch(postTodo(object));
      event.target.reset();
      alert("Task created");
    }
  };

  return (
    <Container>
      <div className="taskCard">
        <div className="card">
          <div className="card-body">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group">
                <div className="d-flex justify-content-between">
                  <label htmlFor="task">Create a Task</label>
                  <Link href="/">
                    <button className="btn btn-light">
                      <i className="fas fa-arrow-left"></i>
                    </button>
                  </Link>
                </div>
                <input
                  type="text"
                  className="form-control"
                  name="task"
                  placeholder="Type a task"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Create;
