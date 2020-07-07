import Head from "next/head";
import Link from "next/link";

const Container = (props) => (
  <>
    <Head>
      <title>Tasks List</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/sketchy/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
      />
    </Head>
    <div className="container">
      <div className="todo">
        <div className="title">
          <h2>Todo List</h2>
          <span>
            <i className="fas fa-clipboard-list"></i>
          </span>
        </div>
        <div className="todolist-container">
          <div className="list-container">{props.children}</div>
        </div>
      </div>
    </div>
  </>
);
export default Container;