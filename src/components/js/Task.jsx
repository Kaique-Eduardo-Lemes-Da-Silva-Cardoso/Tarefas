import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/Task.css";
import {CgClose, CgInfo} from 'react-icons/cg';
const Task = ({task,handleTaskClick,handleTaskDelete}) => {
let Navigate = useNavigate();
  return (

<div className="task-container"
style={task.completed ? {borderLeft: '6px solid chartreuse'}:{borderLeft: '6px solid transparent'}}>
 <div className="title"  onClick={() =>handleTaskClick(task.id)}>
 {task.title}
   </div> <div>
    <button className="info" onClick={() => { Navigate('/Info')}}>
      <CgInfo/>
    </button>
   <button className="delete" onClick={() =>handleTaskDelete(task.id)}>
     <CgClose/>
   </button>

   </div>
  </div>

  );
};
export default Task;
