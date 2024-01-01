import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewTodoForm.module.css';

function NewTodoForm(props) {
  const titleInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;

    const todoData = {
      title: enteredTitle,
      isDone: false
    };

    props.onAddTodo(todoData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Todo</button>
        </div>
      </form>
    </Card>
  );
}

export default NewTodoForm;
