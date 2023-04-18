import React, { useCallback } from "react";
import TaskForm from "../components/TaskForm.component";
import { useNavigate } from "react-router-dom";

const TaskFormPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="mx-3">Task Form</h1>
      <TaskForm />
      <button className="btn btn-info mx-3" onClick={() => navigate(-1)}>
        Go back to list
      </button>
    </>
  );
};

export default TaskFormPage;
