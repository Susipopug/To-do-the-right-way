import React from "react";
import { TaskItem } from "../TaskItem/TaskItem";
import "./TaskList.css";

export const TaskList = ({ tasks, onDelete, setTasks }) => {
  if (!tasks) {
    return null; // or a loading indicator
  }
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          display={task.display}
          setTasks={setTasks}
        />
      ))}
    </ul>
  );
};
