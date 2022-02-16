import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Task.css";
import { CgClose, CgInfo } from "react-icons/cg";
const Task = ({ task, handleTaskClick, handleTaskDelete }) => {
  let Navigate = useNavigate();
  const N = () => {
    Navigate(`/info/${task.infoId}/${task.title}`);
  };
  return (
    <div
      className="task-container"
      style={
        task.completed
          ? { borderLeft: "6px solid chartreuse" }
          : { borderLeft: "6px solid transparent" }
      }
    >
      <div className="title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>{" "}
      <div className="box">
        <button className="info" onClick={N}>
          <CgInfo />
        </button>
        <button className="delete" onClick={() => handleTaskDelete(task.id)}>
          <CgClose />
        </button>
      </div>
    </div>
  );
};
export default Task;
