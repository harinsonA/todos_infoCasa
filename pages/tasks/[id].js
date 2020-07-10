import { useRouter } from "next/router";
import Container from "../../components/Container";
import { useState } from "react";
import { putTodo, getTask } from "../../store/actions/todoAction";
import { useDispatch } from "react-redux";
import Link from "next/link";

const Task = ({ _task }) => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [update, setUpdate] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = event.target.textarea.value;
    console.log(newTask);
    if (newTask && newTask.length != 0) {
      const newobject = {
        userId: _task.userId,
        id: _task.id,
        title: newTask,
        completed: _task.completed,
      };
      dispatch(putTodo(newobject));
      alert("Data sent");
    }
    setVisible(false);
    setUpdate(true);
  };
  const handleClickUpdate = (event) => {
    event.preventDefault();
    setVisible(true);
    setUpdate(false);
  };
  const handleClickCancel = (event) => {
    event.preventDefault();
    setVisible(false);
    setUpdate(true);
  };

  return (
    <Container>
      <div className="taskCard">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">Task: #{_task.id}</h5>
              <Link href="/">
                <button className="btn btn-light">
                  <i className="fas fa-arrow-left"></i>
                </button>
              </Link>
            </div>
            <p className="card-text">
              Description: <br />
              {_task.title}
            </p>
          </div>
          <div className="card-footer">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="d-flex mb-2">
                {update && (
                  <button
                    id="update"
                    type="button"
                    className="btn btn-info"
                    onClick={(e) => handleClickUpdate(e)}
                  >
                    Update
                  </button>
                )}
                {visible && (
                  <div>
                    <button
                      id="save"
                      type="submit"
                      className="btn btn-success mr-2"
                    >
                      Save
                    </button>
                    <button
                      id="cancel"
                      type="button"
                      className="btn btn-danger"
                      onClick={(e) => handleClickCancel(e)}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              {visible && (
                <textarea id="textarea" className="form-control"></textarea>
              )}
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

Task.getInitialProps = async (ctx) => {
  const res = await getTask(ctx.query.id);
  return { _task: res };
};

export default Task;
