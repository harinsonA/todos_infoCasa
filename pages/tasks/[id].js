import { useRouter } from "next/router";
import Container from "../../components/Container";

const Task = ({ _task }) => {
  const router = useRouter();
  const { id } = router.query;

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
            <button type="button" className="btn btn-info">
              Update
            </button>
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
