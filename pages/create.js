import Container from "../components/Container";
import { postTodo } from "../store/actions/todoAction";
import { useDispatch } from "react-redux";



const Create = () => {
 const dispatch = useDispatch()

  const handleSubmit = (event) =>{
    event.preventDefault();
    const task = event.target.task.value
    if (task && task.length !=0) {
      const object = {
        userId: 1,
        title: task,
        completed: false
      }
      dispatch(postTodo(object))      
    }
  }

  return (

    <Container>
      <div className="taskCard">
        <div className="card">
          <div className="card-body">
            <form onSubmit={e => handleSubmit(e) }>
              <div className="form-group">
                <label htmlFor="task">Create a Task</label>
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
