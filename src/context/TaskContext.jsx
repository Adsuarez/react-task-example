import { createContext, useState } from "react";
import { tasks } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [task, setTask] = useState(tasks);

  function createTask(taskTitle, taskDescription) {
    const newTask = {
      id: task.length,
      title: taskTitle,
      description: taskDescription,
    };
    setTask([...task, newTask]);
  }

  function removeTask(taskId) {
    const newArray = task.filter((item) => item.id !== taskId);
    setTask(newArray);
  }

  return (
    <TaskContext.Provider
      value={{
        task,
        createTask,
        removeTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
