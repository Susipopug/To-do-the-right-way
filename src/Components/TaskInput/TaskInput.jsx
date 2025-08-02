import "./TaskInput.css";
import { useTodoContext } from "../../context/ToDoContext";
import { useState } from "react";

export const TaskInput = () => {
  const { createToDo } = useTodoContext();
  const [input, setInput] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleCreateToDo();
    }
  };

  const handleCreateToDo = () => {
    createToDo(input);
    setInput("");
  };

  return (
    <div className="container">
      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={handleKeyDown}
        className="task-input"
        type="text"
        placeholder="Add a task"
      />
      <button onClick={handleCreateToDo} className="task-input__button">
        Add
      </button>
    </div>
  );
};
