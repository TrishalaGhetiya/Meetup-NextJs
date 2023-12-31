import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./TodoItem.module.css";

function TodoItem(props) {
  const router = useRouter();

  const deleteHandler= async () => {
    const response = await fetch("/api/delete-todo", {
      method: "DELETE",
      body: JSON.stringify(props.id),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  }

  const doneHandler = async () => {
    const response = await fetch("/api/edit-todo", {
      method: "PUT",
      body: JSON.stringify(props.id),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          {!props.isDone && <button onClick={doneHandler}>Done</button>}
          {!props.isDone && <button onClick={deleteHandler}>Delete</button>}
        </div>
      </Card>
    </li>
  );
}

export default TodoItem;
