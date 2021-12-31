import React, { useState, useEffect } from "react";

import "../css/App.css";
import AddTask from "../../components/js/AddTask";
import Tasks from "../../components/js/Tasks";
import axios from "axios";
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


  const fetchTasks =  () =>{
    axios.get("https://jsonplaceholder.typicode.com/todos")
     .then(response => {
       let data = tasks.concat(response.data);
       console.log(data);
     setTasks(data);/*commente essa linha para ver o show*/
     })
.catch(error =>{ console.log(error)})
     }


  useEffect(() => {
   
      fetchTasks();

    
  }, []);

  const bagunça = () =>{
    tasks.map((task) => {
      console.log(`Task: id: ${task.id} titulo: ${task.title} 
      completed: ${task.completed}`);
    });
  }
  
  const handleTaskAdd = (taskTitle) => {
    const newtasks = [
      ...tasks,
      {
        title: taskTitle,
        id: Math.floor(Math.random(100) * 100),
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
