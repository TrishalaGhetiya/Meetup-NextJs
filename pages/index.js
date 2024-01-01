import { MongoClient } from "mongodb";
import TodoList from "../components/todos/TodoList";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Todos</title>
        <meta name="description" content="Keep track of your daily activities"></meta>
      </Head>
      <TodoList todos={props.todos} />
    </>
  );
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://trishalaghetiya:Th1OXj3NFcM1kTug@cluster0.fer7r1e.mongodb.net/todos?retryWrites=true&w=majority"
  );

  const db = client.db();

  const todosCollection = db.collection("todos");

  const todos = await todosCollection.find().toArray();

  const allTodos = todos.filter(todo => todo.isDone === false);

  client.close();

  return {
    props: {
      todos: allTodos.map((todo) => ({
        title: todo.title,
        isDone: todo.isDone,
        id: todo._id.toString(),
      })),
    },
    revalidate: 10,
  };
};

export default HomePage;
