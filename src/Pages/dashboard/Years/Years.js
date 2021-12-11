import './Years.css';
import plus from '../img/plus.png';
import { Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { AuthContext } from '../../../providers/auth';

const yearCars = [
  {
    year: '1980',
    idYear: '1'
  },
  {
    year: '1990',
    idYear: '2'
  },
  {
    year: '2000',
    idYear: '3'
  },
  {
    year: '2010',
    idYear: '4'
  },
  {
    year: '2018',
    idYear: '5'
  },
  {
    year: '2020',
    idYear: '6'
  },
  {
    year: '2021',
    idYear: '7'
  },
] 

function YearsDateCar() {

  const {year, handleChangeYear} = React.useContext(AuthContext);

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
        {/* Sub categorias do Year */}
        <div className="subCategories">
          <Form.Select onChange={handleChangeYear} style={{ backgroundColor: "transparent", border: '1px solid rgb(1px solid rgb(70,70,70))', color: 'white' }} size="lg">
            {yearCars.map((yearCars) => (
              <option key={yearCars.idYear} value={yearCars.year}>{yearCars.year}</option>
            ))}
          </Form.Select>
        </div>
        <div className="itensSidebar">
          <p className="Models">Caracteristicas</p>
          <div className="plusButton">
            <img src={plus} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default YearsDateCar;