import React,{useEffect} from "react";
import Button from "../../components/js/Button";
import { useNavigate, useParams } from "react-router-dom";
import "../css/Base.css";
import "../css/Info.css";
import axios from "axios";
const baseURL = "http://localhost:3000";

const Info = () => {
  const Navigate = useNavigate();
  const { infoID, header } = useParams();
  console.log(header);
  console.log(infoID);

  const fetchInfo = () => {
    const data = { "infoId": infoID };

    axios
      .post(`${baseURL}/InfoData`, data)
      .then((Response) => {
        let text = Response.data;
        console.log(text)
        document.getElementById("nota").innerHTML = text;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateInfo = () => {
    //	"TaskId":"d3d31090-c64f-4a66-87d0-2f8a53c7d9b5",
    // "text":"finally it works"
    const text = document.getElementById("nota").value;
    const update = { infoId: infoID, text: text };
    console.log(update);
    axios
      .post(`${baseURL}/UpdateInfo`, update)
      .then((Response) => {
        console.log(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      <div className="container">
        <div className="c">
          <h1>Info</h1>

          <div className="btn">
            <Button
              onClick={(infoID) => {
                updateInfo(infoID);
                Navigate("/Task");
              }}
            >
              Voltar
            </Button>
          </div>
        </div>
        <p>{`${header}`}</p>
        <textarea
          className="texto"
          placeholder="Anote aqui..."
          id="nota"
        ></textarea>
      </div>
    </>
  );
};

export default Info;
