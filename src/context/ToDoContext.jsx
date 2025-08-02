import React, { createContext, useContext, useEffect, useState } from "react";

const ToDoContext = createContext();

export const ToDoContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const createToDo = (text) => {
    const newTask = { id: Date.now(), text, display: "" };
    setTasks((prev) => {
      const newTasks = [...prev, newTask];
      setTasksLocalStorage(newTasks);
      return newTasks;
    });
  };

  //Changes
  const deleteTodo = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    setTasksLocalStorage(updatedTasks);
  };
  //Changes (сделать похожим на код строчка 25)

  const toggleChecked = (id) => {
    setTasks((prev) => {
      const newTasks = prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            display: item.display === "" ? "line-through" : "",
          };
        } else {
          return item;
        }
      });
      setTasksLocalStorage(newTasks);
      return newTasks;
    });
  };

  const updateTextTodo = (id, text) => {
    setTasks((prev) => {
      const newTasks = prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            text,
          };
        } else {
          return item;
        }
      });
      setTasksLocalStorage(newTasks);
      return newTasks;
    });
  };

  const setTasksLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    console.log("stored tasks", storedTasks);

    if (storedTasks) {
      setTasks(storedTasks ?? []);
    }
  }, []);

  return (
    <ToDoContext.Provider
      value={{
        tasks,
        createToDo,
        deleteTodo,
        toggleChecked,
        updateTextTodo,
        setTasksLocalStorage,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export const useTodoContext = () => useContext(ToDoContext);
