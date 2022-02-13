import React from "react";
import Task from "./Task";
const Tasks = ({tasks,handleTaskClick,handleTaskDelete}) => {
  
  console.log(tasks);
  return (
    <div>
      {tasks.map((task) => (
        <Task task={task}  key={task.infoId} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete}/>
      ))}
    </div>
  );
};
export default Tasks;
