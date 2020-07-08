import Container from "../components/Container";
import NavBar from "../components/Navbar";
import Tasks from "../components/Tasks";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../store/actions/todoAction";
import { useEffect } from "react";

const Home = () => {

  const dispatch = useDispatch();
  const {todos} =useSelector(state => state.todo);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  
  return (
    <>
      <Container>
        <Tasks tasks={todos}/>
      </Container>
      <NavBar />
    </>
  );
};

export default Home;
