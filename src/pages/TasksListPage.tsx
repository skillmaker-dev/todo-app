import React from "react";
import TaskList from "../components/TaskList.component";
import { useNavigate } from "react-router-dom";

const TasksListPage = () => {
  return (
    <>
      <h1 className="mx-3">Tasks List</h1>
      <TaskList />
    </>
  );
};

export default TasksListPage;
