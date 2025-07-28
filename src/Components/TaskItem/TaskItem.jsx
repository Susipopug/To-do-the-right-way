import React, { useState, useEffect } from "react";
import "./TaskItem.css";
import checked from "@assets/checkmark.png";
import not_checked from "@assets/check-box.png";
import close_button from "@assets/delete.png";

export const TaskItem = ({ task, onDelete, setTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const toggleChecked = (id) => {
    let data = JSON.parse(localStorage.getItem("tasks"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }

        break;
      }
    }
    setTasks(data);
    localStorage.setItem("tasks", JSON.stringify(data));
  };

  const handleDoubleClick = () => {
    setEditedText(editedText);
    setIsEditing(true);
  };

  const handleChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleBlur = () => {
    // Save the edited text to localStorage and update parent
    let data = JSON.parse(localStorage.getItem("tasks"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === task.id) {
        data[i].text = editedText;
        break;
      }
    }

    setIsEditing(false);
    setTasks(data);
    localStorage.setItem("tasks", JSON.stringify(data));
  };

  const handlePressEnter = (event) => {
    if (event.key === "Enter") {
      handleBlur();
    }
  };

  const [time, setTime] = useState(0);

  return (
    <li className="task-item">
      <div className="task-item__left">
        <div
          className="task-item__image"
          onClick={() => toggleChecked(task.id)}
        >
          {task.display === "" ? (
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
          <span onDoubleClick={handleDoubleClick}>{task.text}</span>
        )}
      </div>
      {isEditing ? (
        ""
      ) : (
        <button className="task-item__button" onClick={() => onDelete(task.id)}>
          <img width={40} height={40} src={close_button} alt="close_button" />
        </button>
      )}

      <button>{time}</button>
    </li>
  );
};
