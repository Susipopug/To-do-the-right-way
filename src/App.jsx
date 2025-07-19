import { useEffect, useState } from "react";
import { TaskInput } from "./TaskInput/TaskInput";
import { TaskList } from "./TaskList/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      const newTask = { id: Date.now(), text: input, display: "" };
      setTasks([...tasks, newTask]);
      setInput("");
      localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    }
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks ?? []);
    }
  }, []);

  return (
    <div className="todo">
      <h1 className="todo-header">Todo-list</h1>
      <TaskInput value={input} onChange={setInput} onAdd={handleAdd} />
      <TaskList tasks={tasks} setTasks={setTasks} onDelete={handleDelete} />
    </div>
  );
};

export default App;
