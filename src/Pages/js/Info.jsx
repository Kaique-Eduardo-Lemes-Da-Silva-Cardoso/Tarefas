import React from "react";
import Button from "../../components/js/Button";
import {useNavigate,useParams} from 'react-router-dom';
import "../css/Info.css";
import { getByTitle } from "@testing-library/react";
const Info = () => {
  const Navigate = useNavigate();
  const {infoID,header} = useParams();
  console.log(header)
  console.log(infoID)
  return (
    <>
      <div className="container">
        <div className="c">
          <h1>Info</h1>{`${header}`}
          <div className="btn">
            <Button onClick={() =>{Navigate('/') }}>Voltar</Button>
          </div>
        </div>
        <p>{}</p>
        <textarea className="texto"  >
           💲💲💸💸💸💷💷  💲💲💸💸💸💷💷  💲💲💸💸💸💷💷  💲💲💸💸💸💷💷
           💲💲💸💸💸💷💷  💲💲💸💸💸💷💷  💲💲💸💸💸💷💷  💲💲💸💸💸💷💷
           💲💲💸💸💸💷💷  💲💲💸💸💸💷💷  💲💲💸💸💸💷💷  💲💲💸💸💸💷💷
           💲💲💸💸💸💷💷  💲💲💸💸💸💷💷  💲💲💸💸💸💷💷  💲💲💸💸💸💷💷
           💲💲💸💸💸💷💷  💲💲💸💸💸💷💷  💲💲💸💸💸💷💷  💲💲💸💸💸💷💷
           💲💲💸💸💸💷💷  💲💲💸💸💸💷💷  💲💲💸💸💸💷💷  💲💲💸💸💸💷💷
        </textarea>
      </div>
    </>
  );
};

export default Info;
