import { TaskInput } from "@components/TaskInput/TaskInput";
import { TaskList } from "@components/TaskList/TaskList";
import { ToDoContextProvider } from "@/context/ToDoContext";

const App = () => {
  return (
    <ToDoContextProvider>
      <div className="todo">
        <h1 className="todo-header">Todo-list</h1>
        <TaskInput />
        <TaskList />
      </div>
    </ToDoContextProvider>
  );
};

export default App;
