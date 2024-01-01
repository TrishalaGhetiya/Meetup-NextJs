import TodoItem from './TodoItem';
import classes from './TodoList.module.css';

function TodoList(props) {
  return (
    <ul className={classes.list}>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          isDone={todo.isDone}
        />
      ))}
    </ul>
  );
}

export default TodoList;
