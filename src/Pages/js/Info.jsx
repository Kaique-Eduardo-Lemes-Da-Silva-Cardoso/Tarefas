import React from "react";
import Button from "../../components/js/Button";
import {useNavigate} from 'react-router-dom';
import "../css/Info.css";
const Info = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="c">
          <h1>Info</h1>{" "}
          <div className="btn">
            <Button onClick={() =>{Navigate('/')}}>Voltar</Button>
          </div>
        </div>
        <div className="texto">
           💲💲💸💸💸💷💷  💲💲💸💸💸💷💷  💲💲💸💸💸💷💷  💲💲💸💸💸💷💷
           💲💲💸💸💸💷💷  💲💲💸💸💸💷💷  💲💲💸💸💸💷💷  💲💲💸💸💸💷💷
           💲💲💸💸💸💷💷  💲💲💸💸💸💷💷  💲💲💸💸💸💷💷  💲💲💸💸💸💷💷
           💲💲💸💸💸💷💷  💲💲💸💸💸💷💷  💲💲💸💸💸💷💷  💲💲💸💸💸💷💷
           💲💲💸💸💸💷💷  💲💲💸💸💸💷💷  💲💲💸💸💸💷💷  💲💲💸💸💸💷💷
           💲💲💸💸💸💷💷  💲💲💸💸💸💷💷  💲💲💸💸💸💷💷  💲💲💸💸💸💷💷
        </div>
      </div>
    </>
  );
};

export default Info;
