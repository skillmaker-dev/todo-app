import { TasksContext } from "./contexts/TasksContext";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TasksListPage from "./pages/TasksListPage";
import TaskFormPage from "./pages/TaskFormPage";
import NavBar from "./components/NavBar.component";
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
