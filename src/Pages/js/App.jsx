import React, { useState } from "react";

import "../css/App.css";
import AddTask from "../../components/js/AddTask";
import Tasks from "../../components/js/Tasks";
const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "learn react",
      completed: false,
    },
    {
      id: 2,
      title: "learn sequelise",
      completed: false,
    },
    {
      id: 3,
      title: "learn js",
      completed: true,
    },
    {
      id: 4,
      title: "learn expo",
      completed: true,
    },
  ]);

  const handleTaskAdd = (taskTitle) => {
    const newtasks = [
      ...tasks,
      {
        title: taskTitle,
        id: Math.random(10),
        completed: false,
      },
    ];
    setTasks(newtasks);
  };

  const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };
 

  return (
    <>
     <div className="container">
            <h1>Minhas Tarefas</h1>
            <AddTask handleTaskAdd={handleTaskAdd} />
            <Tasks
              tasks={tasks}
              handleTaskClick={handleTaskClick}
              handleTaskDelete={handleTaskDelete}
            />
        
          </div>
    </>
  );
};
export default App;
