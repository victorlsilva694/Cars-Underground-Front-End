import plus from '../img/plus.png';
import { Form } from 'react-bootstrap';
import './Characteristics.css';
import React, { useState } from 'react';
import { AuthContext } from '../../../providers/auth';

const CharacteristicsArr = [
  {
    motorText: "Motor 1.0",
    motor: "1.0",
    id: '1'
  },
  {
    motorText: "Motor 1.4",
    motor: "1.4",
    id: '2'
  },
  {
    motorText: "Motor 1.6",
    motor: "1.6",
    id: '3'
  },
  {
    motorText: "Motor 1.8",
    id: '4'
  },
  {
    motorText: "Motor 2.0",
    motor: "2.0",
    id: '5'
  },
  {
    motorText: "Motor 2.4",
    motor: "2.4",
    id: '6'
  },
  {
    motorText: "Motor 2.6",
    motor: "2.6",
    id: '7'
  },
  {
    motorText: "Motor 2.8",
    motor: "2.8",
    id: '8'
  },
  {
    motorText: "Motor 3.0",
    motor: "3.0",
    id: '9'
  },
]


function Characteristics() {

  
  const {handleChangeCharacteristics} = React.useContext(AuthContext);

  return (
    <>
      <div className="containerSideBar">
        <div className="itensSidebar">
          <p className="Models">Modelos</p>
          <div className="plusButton">
            <img src={plus} alt="" />
          </div>
        </div>
        <div className="itensSidebar">
          <p className="Models">Cidade</p>
          <div className="plusButton">
            <img src={plus} alt="" />
          </div>
        </div>
        <div className="itensSidebar">
          <p className="Models">Preços</p>
          <div className="plusButton">
            <img src={plus} alt="" />
          </div>
        </div>
        <div className="itensSidebar">
          <p className="Models">Ano</p>
          <div className="plusButton">
            <img src={plus} alt="" />
          </div>
        </div>
        <div className="itensSidebar">
          <p className="Models">Caracteristicas</p>
          <div className="plusButton">
            <img src={plus} alt="" />
          </div>
        </div>
        {/* Sub categorias do Year */}
        <div className="subCategories">
          <Form.Select onChange={handleChangeCharacteristics} style={{ backgroundColor: "transparent", border: '1px solid rgb(1px solid rgb(70,70,70))', color: 'white' }} size="lg">
          { 
            CharacteristicsArr.map((Characteristics) => (
              <option key={Characteristics.motor} value={Characteristics.motor}>{Characteristics.motorText}</option>
            ))
          }
          </Form.Select>
        </div>
      </div>
    </>
  );
}

export default Characteristics;