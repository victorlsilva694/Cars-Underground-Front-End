import './price.css';
import plus from '../img/plus.png';
import { Form } from 'react-bootstrap'
import React, { useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/auth';

/*const options = [
  {
    label: "R$ 0 - 100.000,00",
    price: {
      max: 100000,
      min: 0
    }
  },
  {
    label: "R$ 100.000,00 - 200.000,00",
    price: {
      max: 200000,
      min: 100000
    }
  },
  {
    label: "R$ 200.000,00 - 300.000,00",
    price: {
      max: 300000,
      min: 200000
    }
  },
  {
    label: "R$ 300.000,00 - 400.000,00",
    price: {
      max: 400000,
      min: 300000
    }
  },
  {
    label: "R$ 400.000,00 - 500.000,00",
    price: {
      max: 400000,
      min: 300000
    }
  },
  {
    label: "R$ 500.000,00 - 600.000,00",
    price: {
      max: 400000,
      min: 300000
    }
  },
  {
    label: "R$ 600.000,00 - 700.000,00",
    price: {
      max: 400000,
      min: 300000
    }
  },



]*/

function PriceComponent() {

  const [options, setOptions] = useState([])

  const BrlFormat = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  useEffect(() => {
    let itens = []
    for (let i = 0; i < 11; i++) {
      itens.push({
        label: `${BrlFormat.format(i * 100000)} - ${BrlFormat.format((i * 100000) + 100000)}`,
        price: {
          max: (i * 100000) + 100000,
          min: i * 100000
        }
      })
    }
    setOptions(itens);
  }, []);

  const { price, handleChangePrice } = React.useContext(AuthContext);
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

        <div className="subCategories">
          <>
            <Form.Select onChange={handleChangePrice} style={{ backgroundColor: "transparent", border: '1px solid rgb(1px solid rgb(70,70,70))', color: 'white' }} size="lg">
              {options.map((option, index) => (
                <option key={index} value={JSON.stringify(option.price)}>{option.label}</option>
              ))}
            </Form.Select>

          </>
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
    </>
  )
}

export default PriceComponent;