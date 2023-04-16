import { useContext } from "react";
import { TasksContext } from "../contexts/TasksContext";

export default function TaskList({ onDelete }) {
  const { tasks } = useContext(TasksContext);
  return (
    <>
      {tasks.map((task, index) => (
        <div
          className="d-flex flex-row w-25 m-3 align-items-center justify-content-between"
          key={task + index}>
          <h4 className="my-0">{task}</h4>
          <button
            className="btn btn-danger"
            onClick={() => onDelete(index)}>
            X
          </button>
        </div>
      ))}
    </>
  );

}
