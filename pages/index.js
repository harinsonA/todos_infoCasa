import Container from "../components/Container";
import NavBar from "../components/Navbar";
import Tasks from "../components/Tasks";

const Index = ({ todo }) => {
  return (
    <>
      <Container>
        <Tasks tasks={todo} />
      </Container>
      <NavBar />
    </>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return { todo: data };
};

export default Index;
