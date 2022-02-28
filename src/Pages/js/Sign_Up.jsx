import React, { useEffect, useState } from "react";
import Button from "../../components/js/Button";
import { useNavigate, useParams } from "react-router-dom";
import "../css/Sign_up.css";
import axios from "axios";

import { CgList } from "react-icons/cg";
const baseURL = "http://localhost:3000";
const Sign_Up = () => {
    let Navigate = useNavigate();
  const [Iemail, setIemail] = useState("");
  const [Ipassword, setIpassword] = useState("");
  const [Iname, setIname] = useState("");

  const handleInputChangePassword = (e) => {
    setIpassword(e.target.value);
  };
  const handleInputChangeName = (e) => {
    setIname(e.target.value);
  };
  const handleInputChangeEmail = (e) => {
    setIemail(e.target.value);
  };

  const ze =()=> {
    const data = {
      name: Iname,
      email: Iemail,
      password: Ipassword,
    };
    console.log(data);
    axios
      .post(`${baseURL}/CreateUser`, data)
      .then((response) => {
        console.log(response.data);
        Navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="container">
        <div className="icon">
          <div className="icon-caps">
            <CgList className="icon-img" color="chartreuse" />
          </div>
        </div>
        <div className="box">
          <input
            type="text"
            value={Iemail}
            onChange={handleInputChangeEmail}
            placeholder="E-mail"
            className="input"
          />
          <input
            type="text"
            value={Iname}
            onChange={handleInputChangeName}
            placeholder="name"
            className="input"
          />
          <input
            type="password"
            onChange={handleInputChangePassword}
            value={Ipassword}
            placeholder="Password"
            className="input"
          />
          <Button onClick={ze}>Sign Up</Button>
        </div>
      </div>
    </>
  );
};
export default Sign_Up;
