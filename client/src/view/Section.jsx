import { MYTextField } from "../components/TextField";
import { Button } from "../components/Button";
import { ListItem } from "../components/ListItem";
import { useState } from "react";
import "./section.scss";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { addToTodo } from "../redux/slices/todo";
import { TodoFilter } from "../redux/slices/filter";

const todosWithFilter = ({ todos, filter }) => {
  let todo = todos;

  const status = filter.status;
  if (status !== TodoFilter.all) {
    const key = status === TodoFilter.completed ? true : false;
    todo = todo.filter((item) => item.done === key);
  }
  // key for done

  if (filter.color.length > 0) {
    todo = todo.filter((item) => filter.color.includes(item.tag));
  }

  return todo;
};

export const Section = () => {
  const todos = useSelector(todosWithFilter, shallowEqual);

  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    if (value.length <= 0) {
      return;
    }
    dispatch(addToTodo(value));
  };

  return (
    <div>
      <div className="section__editor_wrapper">
        <MYTextField value={value} onChange={onChange} />
        <Button type="primary" onClick={onClick} size="m">
          Add New Task{" "}
        </Button>
      </div>

      <div className="section__list_wrapper">
        {todos.map((item, index) => {
          return <ListItem key={item.id} id={item.id} />;
        })}
      </div>
    </div>
  );
};
