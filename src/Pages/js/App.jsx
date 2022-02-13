import React, { useState, useEffect } from "react";

import "../css/App.css";
import AddTask from "../../components/js/AddTask";
import Tasks from "../../components/js/Tasks";
import axios from "axios";
const baseURL = "http://localhost:3000";
const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    axios
      .get("http://localhost:3000/GetData")
      .then((response) => {
        let data = tasks.concat(response.data);
        console.log(data);
        setTasks(data); /*commente essa linha para ver o show*/
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addTaskToDatabase = (taskTitle) => {
    taskTitle = { title: taskTitle };
    axios
      .post("http://localhost:3000/CreateTask", taskTitle)
      .then((response) => {
        let data = tasks.concat(response.data);
        console.log(data);
        setTasks(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteOnDB = (taskId) => {
    taskId = { id: taskId };
    axios
      .post(`${baseURL}/DeleteOneTask`, taskId)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const bagunça = () => {
    tasks.map((task) => {
      console.log(`Task: id: ${task.id} titulo: ${task.title} 
      completed: ${task.completed}`);
    });
  };

  const handleTaskAdd = (taskTitle) => {
    addTaskToDatabase(taskTitle);
    // const newtasks = [
    //   ...tasks,
    //   {
    //     title: taskTitle,
    //     id: data.id,
    //     completed: data.completed,
    //   },
    // ];
    // setTasks(newtasks);
  };

  const handleTaskDelete = (taskId) => {
    deleteOnDB(taskId);
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        const update = { id: taskId, title: task.tile, check: !task.completed };
        console.log(update);
        axios
          .post(`${baseURL}/UpdateTask`, update)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });

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
