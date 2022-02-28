import React, { useEffect, useState } from "react";
import Button from "../../components/js/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../css/Sign_in.css";
import axios from "axios";
import { CgList } from "react-icons/cg";
const baseURL = "http://localhost:3000";
const Sign_In = () => {
  const [Iemail, setIemail] = useState("");
  const [Ipassword, setIpassword] = useState("");
  const [Iname, setIname] = useState("");
  let navegate = useNavigate();
  const handleInputChangePassword = (e) => {
    setIpassword(e.target.value);
  };

  const handleInputChangeEmail = (e) => {
    setIemail(e.target.value);
  };

  function ze() {
    const data = {
      "email": Iemail,
      "password": Ipassword,
    };

    console.log(data);
    axios.post(`${baseURL}/Login`, data).then((response) => {
      console.log(response.data);
      console.log(response.headers);
      sessionStorage.setItem("token",response.data);
      navegate("/task");
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
            type="password"
            onChange={handleInputChangePassword}
            value={Ipassword}
            placeholder="Password"
            className="input"
          />
          <Link
            style={{
              color: "chartreuse",
              marginBottom: 30,
              marginLeft: "auto",
              marginRight: "auto",
            }}
            to={"/Sign_Up"}
          >
            {" "}
            Sign Up
          </Link>
          <Button onClick={ze}>Sign In</Button>
        </div>
      </div>
    </>
  );
};
export default Sign_In;
