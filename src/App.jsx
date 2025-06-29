import { useEffect, useState } from "react";
import { TaskInput } from "./TaskInput/taskInput";
import { TaskList } from "./TaskList/taskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      const newTask = { id: Date.now(), text: input, display: "" };
      setTasks([...tasks, newTask]);
      setInput("");
    }
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, 100);
    return () => clearTimeout(timeoutID);
  }, [tasks]);

  return (
    <div className="todo">
      <h1 className="todo-header">Todo-list</h1>
      <TaskInput value={input} onChange={setInput} onAdd={addTask} />
      <TaskList tasks={tasks} setTasks={setTasks} onDelete={handleDelete} />
    </div>
  );
};

export default App;
