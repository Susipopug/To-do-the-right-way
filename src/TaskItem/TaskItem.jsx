import React from "react";
import "./TaskItem.css";
import checked from "../assets/checkmark.png";
import not_checked from "../assets/check-box.png";
import close_button from "../assets/delete.png";

export const TaskItem = ({ task, onDelete, setTasks }) => {
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
  };

  return (
    <li className="task-item">
      <div className="task-item__left" onClick={() => toggleChecked(task.id)}>
        {task.display === "" ? (
          <img width={30} height={30} src={not_checked} alt="not_checked" />
        ) : (
          <img width={30} height={30} src={checked} alt="checked" />
        )}

        <span>{task.text}</span>
      </div>
      <button className="task-item__button" onClick={() => onDelete(task.id)}>
        <img width={40} height={40} src={close_button} alt="close_button" />
      </button>
    </li>
  );
};
