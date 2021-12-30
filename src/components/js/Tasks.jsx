import React from "react";
import Task from "./Task";
const Tasks = ({tasks,handleTaskClick,handleTaskDelete}) => {
  
  console.log(tasks);
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id}task={task} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete}/>
      ))}
    </div>
  );
};
export default Tasks;
