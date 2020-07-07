import Container from "../components/Container";
const Create = () => {
  return (
    <Container>
      <div className="taskCard">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="task">Create a Task</label>
                <input
                  type="email"
                  className="form-control"
                  id="task"
                  placeholder="Type a task"
                />
              </div>
              <button type="submit" className="btn btn-primary" onClick={(e) => {
                e.preventDefault()
                const task = document.getElementById("task").value

                if (task.length != 0) {

                  console.log(task)
                  const res =  fetch('https://jsonplaceholder.typicode.com/todos', {
                    method: 'POST',
                    headers:{ 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      userId: 1,
                      title: task,
                      completed: false
                    }),
                  }).then(res => console.log(res)).catch(err => console.log(err))
                

                  document.getElementById("task").value = null

                } else {
                  console.log("no")
                }
                // const res = await fetch(API_URL, {
                //   method: 'POST',
                //   headers,
                //   body: JSON.stringify({
                //     query,
                //     variables,
                //   }),
                // })
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
