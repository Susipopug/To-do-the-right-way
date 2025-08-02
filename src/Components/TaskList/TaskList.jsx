import { TaskItem } from "../TaskItem/TaskItem";
import "./TaskList.css";

import { useTodoContext } from "../../context/ToDoContext";

export const TaskList = () => {
  const { tasks } = useTodoContext();
  return (
    <ul className="task-list">
      {tasks?.map((task) => (
        <TaskItem {...task} key={task.id} />
      ))}
    </ul>
  );
};
