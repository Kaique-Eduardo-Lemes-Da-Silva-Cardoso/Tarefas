import React from "react";
import Button from "../../components/js/Button";
import { useNavigate, useParams } from "react-router-dom";
import "../css/Info.css";
import axios from "axios";
const baseURL = "http://localhost:3000";

const Info = () => {
  const Navigate = useNavigate();
  const { infoID, header } = useParams();
  console.log(header);
  console.log(infoID);

  const updateInfo = (infoID, text) => {
    //	"TaskId":"d3d31090-c64f-4a66-87d0-2f8a53c7d9b5",
    // "text":"finally it works"
    const update = { TaskID: infoID, text: text };

    axios
      .post(`${baseURL}/UpdateInfo`, update)
      .then((Response) => {
        console.log(Response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <div className="c">
          <h1>Info</h1>
    
          <div className="btn">
            <Button
              onClick={() => {
                Navigate("/");
              }}
            >
              Voltar
            </Button>
          </div>
        </div>
        <p>{`${header}`}</p>
        <textarea className="texto" placeholder="Anote aqui...">

        </textarea>
      </div>
    </>
  );
};

export default Info;
