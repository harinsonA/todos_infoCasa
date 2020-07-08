import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { postTodo } from "../store/actions/todoAction";
const Create = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(postTodo());
  }, []);

  return (
    <Container>
      <div className="taskCard">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="task">Create a Task</label>
                <input
                  type="text"
                  className="form-control"
                  id="task"
                  placeholder="Type a task"
                />
              </div>
              <button type="submit" className="btn btn-primary" onClick={(e) =>{
                  e.preventDefault()
              }}>
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
