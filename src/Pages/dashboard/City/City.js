import plus from '../img/plus.png';
import './City.css';
import { Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { AuthContext } from '../../../providers/auth';

const states = [
  { name: "Acre", id: "AC" },
  { name: "Alagoas", id: "AL" },
  { name: "Amapá", id: "AP" },
  { name: "Amazonas", id: "AM" },
  { name: "Bahia", id: "BA" },
  { name: "Ceará", id: "CE" },
  { name: "Distrito Federal", id: "DF" },
  { name: "Espírito Santo", id: "ES" },
  { name: "Goiás", id: "GO" },
  { name: "Maranhão", id: "MA" },
  { name: "Mato Grosso", id: "MT" },
  { name: "Mato Grosso do Sul", id: "MS" },
  { name: "Minas Gerais", id: "MG" },
  { name: "Pará", id: "PA" },
  { name: "Paraíba", id: "PB" },
  { name: "Paraná", id: "PR" },
  { name: "Pernambuco", id: "PE" },
  { name: "Piauí", id: "PI" },
  { name: "Rio de Janeiro", id: "RJ" },
  { name: "Rio Grande do Norte", id: "RN" },
  { name: "Rio Grande do Sul", id: "RS" },
  { name: "Rondônia", id: "RO" },
  { name: "Roraima", id: "RR" },
  { name: "Santa Catarina", id: "SC" },
  { name: "São Paulo", id: "SP" },
  { name: "Sergipe", id: "SE" },
  { name: "Tocantins", id: "TO" },
];
function CityComponent() {
  const {estado, handleChange} = React.useContext(AuthContext);


  return (
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
      <div className="subCategories">
        <div className="itensSidebar" style={{ border: 'none' }} >
          <Form.Select value={estado} onChange={handleChange} style={{ backgroundColor: "transparent", border: '1px solid rgb(1px solid rgb(70,70,70))', color: 'white' }} size="lg">
            {states.map((option) => (
              <option key={option.id} value={option.name}>{option.name}</option>
            ))}
          </Form.Select>
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
    </div>
  )
}

export default CityComponent;