import React,{useEffect, useState} from "react";
import Button from "../../components/js/Button";
import { useNavigate, useParams } from "react-router-dom";
import "../css/Sign_up.css";
import axios from "axios";
const baseURL = "http://localhost:3000";
const Sign_Up = () =>{
    const[Iemail,setIemail] = useState("");
    const[Ipassword,setIpassword] = useState("");
    const[Iname,setIname] = useState("");

    const handleInputChangePassword = (e) => {
        setIpassword(e.target.value);
      };
    const handleInputChangeName = (e) => {
        setIname(e.target.value);
      };
    const handleInputChangeEmail = (e) => {
        setIemail(e.target.value);
      };


function ze(){
    const data = {
        "name":Iname,
        "email":Iemail,
        "password":Ipassword
    }
    console.log(data)
}

return(
    <>
    <div className="container">
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
)
}
export default Sign_Up;