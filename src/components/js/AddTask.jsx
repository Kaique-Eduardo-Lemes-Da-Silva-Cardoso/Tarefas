import React, { useState } from "react";
import "../css/AddTask.css";
import Button from "./Button";
const AddTask = ({ handleTaskAdd }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    console.log(inputData);
    inputData.trim();
    if (inputData !=="") {
      handleTaskAdd(inputData);
    setInputData("");
    }
   
  };
  

  return (
    <div className="add-task-container">
      <input
        value={inputData}
        onChange={handleInputChange}
        className="add-task-input"
        type="text"
        name=""
        id=""
      />
      <div className="button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
