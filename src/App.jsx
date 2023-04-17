import TaskList from "./components/TaskList.component";
import TaskForm from "./components/TaskForm.component";
import { TasksContext } from "./contexts/TasksContext";
import { useState } from "react";

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
      <TaskList />
      <TaskForm />
    </TasksContext.Provider>
  );
}
