import "./listItem.scss";
import { colors } from "../helpers/constants";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteFromTodo,
  toggleComplete,
  changeTag
} from "../redux/slices/todo";
export const ListItem = ({ id }) => {
  const colorTags = colors.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  const { text, done, tag } = useSelector((state) =>
    state.todos.find((item) => item.id === id)
  );

  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteFromTodo(id));
  };

  const onCheck = () => {
    dispatch(toggleComplete(id));
  };

  const onTagChanged = (e) => {
    dispatch(changeTag({ id: id, color: e.target.value }));
  };

  return (
    <div className="listItem">
      <div className={`listItem__text listItem__text--${done}`}>{text}</div>
      <div className="listItem__opertaion">
        <select
          value={tag}
          onChange={(e) => onTagChanged(e)}
          className={`listItem__selectbox  list__item__selectbox--${tag}`}
          style={{ color: tag, border: `1px solid ${tag}` }}
        >
          {colorTags}
        </select>

        <input
          type="checkbox"
          onChange={(e) => {
            onCheck(id);
          }}
          checked={done}
        />

        <img
          className="listItem__delete"
          src="https://img.icons8.com/color/48/000000/delete-forever.png"
          onClick={() => onDelete(id)}
          alt={"delte "}
        />
      </div>
    </div>
  );
};
