import { useRouter } from "next/router";
import Container from "../../components/Container";

const Task = ({ _task }) => {
  const router = useRouter();
  const { id } = router.query;

  const handleClick = (event) => {
    event.preventDefault();
    
    console.log(event.target.parentElement);
    // const task = event.target.task.value;
    // if (task && task.length != 0) {
    //   const object = {
    //     userId: 1,
    //     title: task,
    //     completed: false,
    //   };
    //   dispatch(postTodo(object));
    // }
  };

  return (
    <Container>
      <div className="taskCard">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Task: #{_task.id}</h5>
            <p className="card-text">
              Description: <br />
              {_task.title}
            </p>
          </div>
          <div className="card-footer">
            <form>
              <div className="d-flex mb-2">
                <button
                  id="update"
                  type="button"
                  className="btn btn-info "
                  onClick={(e) => handleClick(e)}
                >
                  Update
                </button>
                <button
                  id="save"
                  type="submit"
                  className="btn btn-success d-none"
                  onClick={(e) => {
                    const update = document.getElementById("update");
                    const cancel = document.getElementById("cancel");
                    const textarea = document.getElementById("textarea");
                    update.classList.remove("d-none");
                    cancel.classList.add("d-none");
                    textarea.classList.add("d-none");
                    e.target.classList.add("d-none");
                  }}
                >
                  save
                </button>
                <button
                  id="cancel"
                  type="button"
                  className="btn btn-danger d-none"
                  onClick={(e) => {
                    const save = document.getElementById("save");
                    const update = document.getElementById("update");
                    const textarea = document.getElementById("textarea");
                    update.classList.remove("d-none");
                    save.classList.add("d-none");
                    textarea.classList.add("d-none");
                    e.target.classList.add("d-none");
                  }}
                >
                  Cancel
                </button>
              </div>
              <textarea
                id="textarea"
                className="form-control d-none"
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

Task.getInitialProps = async (ctx) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${ctx.query.id}`
  );
  const data = await res.json();
  return { _task: data };
};

export default Task;
