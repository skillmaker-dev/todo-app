import React from "react";
import TaskList from "../components/TaskList.component";
import { useNavigate } from "react-router-dom";

const TasksListPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="mx-3">Tasks List</h1>
      <TaskList />
      <button
        className="btn btn-primary mx-3"
        onClick={() => navigate("/form")}>
        Go to form
      </button>
    </>
  );
};

export default TasksListPage;
