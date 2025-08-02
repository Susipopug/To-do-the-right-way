import { useState } from "react";
import "./TaskItem.css";
import checked from "@assets/checkmark.png";
import not_checked from "@assets/check-box.png";
import close_button from "@assets/delete.png";
import { useTodoContext } from "../../context/ToDoContext";

export const TaskItem = ({ id, text, display }) => {
  const {
    deleteTodo,
    updateTextTodo,
    toggleChecked,
    tasks,
    setTasksLocalStorage,
    newTasks,
  } = useTodoContext();

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleDoubleClick = () => {
    setEditedText(text);
    setIsEditing(true);
  };

  const handleChange = (event) => {
    setEditedText(event.target.value);
  };

  //Changes
  const handleBlur = () => {
    console.log(id);
    updateTextTodo(id, editedText);
    setIsEditing(false);
  };
  //Changes

  const handlePressEnter = (event) => {
    if (event.key === "Enter") {
      handleBlur();
    }
  };

  return (
    <li className="task-item">
      <div className="task-item__left">
        <div className="task-item__image" onClick={() => toggleChecked(id)}>
          {display === "" ? (
            <img width={30} height={30} src={not_checked} alt="not_checked" />
          ) : (
            <img width={30} height={30} src={checked} alt="checked" />
          )}
        </div>

        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handlePressEnter}
            autoFocus
          />
        ) : (
          <span onDoubleClick={handleDoubleClick}>{text}</span>
        )}
      </div>
      {isEditing ? (
        ""
      ) : (
        <button className="task-item__button" onClick={() => deleteTodo(id)}>
          <img width={40} height={40} src={close_button} alt="close_button" />
        </button>
      )}
    </li>
  );
};
