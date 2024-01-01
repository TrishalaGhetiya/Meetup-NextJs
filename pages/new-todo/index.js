import { useRouter } from "next/router";
import NewTodoForm from '../../components/todos/NewTodoForm'
import Head from "next/head";

const NewTodoPage = () => {
  const router = useRouter();

  const addTodoHandler = async (todoData) => {
    const response = await fetch("/api/new-todo", {
      method: "POST",
      body: JSON.stringify(todoData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  };
  return (
    <>
      <Head>
        <title>Add a Todo</title>
        <meta name="description" content="Add your task to do"></meta>
      </Head>
      <NewTodoForm onAddTodo={addTodoHandler} />
    </>
  );
};

export default NewTodoPage;
