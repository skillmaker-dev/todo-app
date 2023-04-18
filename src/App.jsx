import { TasksContext } from "./contexts/TasksContext";
import { useState } from "react";
import AppRouter from "./components/AppRouter";

export default function App() {
  const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);

  const handleAddTask = (task) => {
    setTasks((tasks) => [...tasks, task]);
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index));
  };

  const contextValues = {
    tasks,
    handleAddTask,
    handleDeleteTask,
  };

  return (
    <TasksContext.Provider value={contextValues}>
      <AppRouter />
    </TasksContext.Provider>
  );
}
