import './index.css';
import NavBar from './navbar/Navbar';
import plus from './img/plus.png';
import { Form } from 'react-bootstrap';
import React, { useState } from 'react';
import City from './City/City';
import Price from './price/Price';
import Years from './Years/Years';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Characteristics from './characteristics/Characteristics';
import CarCards from './cardsCar/CarCards';
import { AuthContext } from '../../providers/auth';
import { useEffect } from 'react';

const arrayCars = [
  {
    urlImage: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/11/VW-Gol.jpg?w=876&h=484&crop=1",
    Marca: "volkswagen ",
    Modelo: 'gol',
    cor: 'branco',
    EstadoVendedor: 'São Paulo',
    motor: '1.0',
    ano: '2018',
    Caracteristicas: "Gasolina, vidro elétrico 2 portas",
    precoText: "R$ 27.626,00",
    preco: 27626
  },
  {
    urlImage: "https://imgd.aeplcdn.com/1056x594/cw/ec/22037/Volkswagen-Polo-Exterior-95634.jpg?v=201711021421&wm=1&q=85",
    Marca: "volkswagen ",
    Modelo: 'polo',
    cor: 'branco',
    EstadoVendedor: 'Acre',
    motor: '1.8',
    ano: '2020',
    Caracteristicas: "Flex, vidro elétrico 4 portas, ar condicionado, teto solar",
    precoText: "R$ 68.483,00",
    preco: 68483
  },
  {
    urlImage: "https://mundodoautomovelparapcd.com.br/wp-content/uploads/2020/08/Jetta-Comfortline-2017-07.jpg",
    Marca: "volkswagen ",
    Modelo: 'Jetta',
    cor: 'branco',
    EstadoVendedor: 'Rio De Janeiro',
    motor: '2.5',
    ano: '2021',
    Caracteristicas: "Flex, vidro elétrico 4 portas, ar condicionado, teto solar, Turbo",
    precoText: "R$ 51.225,00",
    preco: 51225
  },
  {
    urlImage: "https://cdn.motor1.com/images/mgl/qNo6R/s1/bmw-x5-protection-vr6-2019.webp",
    Marca: "BMW",
    Modelo: 'BMW X5',
    cor: 'branco',
    motor: '2.6',
    EstadoVendedor: 'Pará',
    ano: '2021',
    Caracteristicas: "Flex, vidro elétrico 4 portas, ar condicionado, teto solar, Turbo",
    precoText: "R$ 76.562,00",
    preco: 76562
  },
  {
    urlImage: "https://carrobonito.com/wp-content/uploads/2020/08/BMW-X6-M.jpg",
    Marca: "BMW",
    Modelo: 'BMW X6',
    cor: 'preto',
    motor: '2.8',
    EstadoVendedor: 'Ceará',
    ano: '2021',
    Caracteristicas: "Flex, vidro elétrico 4 portas, ar condicionado, teto solar, Turbo",
    precoText: "R$ 1.041.369,00",
    preco:  1041369
  },
  {
    urlImage: "https://cdn.motor1.com/images/mgl/mpQ3r/s1/2021-bmw-x7-dark-shadow-edition-front-three-quarters.jpg",
    Marca: "BMW",
    Modelo: 'BMW X7',
    EstadoVendedor: 'São Paulo',
    cor: 'preto',
    motor: '3.2',
    ano: '2021',
    Caracteristicas: "Flex, vidro elétrico 4 portas, ar condicionado, teto solar, Turbo",
    precoText: "R$ 893.675,00",
    preco: 893675
  },
  {
    urlImage: "https://carroesporteclube.com.br/wp-content/uploads/2021/09/Hyundai-Creta-2022-ultimate-1280x720.jpg",
    Marca: "Hyundai",
    Modelo: 'Creta',
    cor: 'branco',
    motor: '2.0',
    EstadoVendedor: 'São Paulo',
    ano: '2021',
    Caracteristicas: "Flex, vidro elétrico 4 portas, ar condicionado, teto solar, Turbo",
    precoText: "R$ 93.860,00",
    preco: 93860
  },
  {
    urlImage: "https://motorshow.com.br/wp-content/uploads/sites/2/2021/03/09_hb20_premium.jpg",
    Marca: "Hyundai",
    Modelo: 'HB20',
    cor: 'preto',
    EstadoVendedor: 'São Paulo',
    motor: '1.4',
    ano: '2021',
    Caracteristicas: "Flex, vidro elétrico 4 portas, ar condicionado, teto solar, Turbo",
    precoText: "R$ 68.937,00",
    preco: 68937
  },
  {
    urlImage: "https://cdn.motor1.com/images/mgl/kPOQe/s1/hyundai-azera-2020-brasil.jpg",
    Marca: "Hyundai",
    Modelo: 'Azera',
    EstadoVendedor: 'São Paulo',
    cor: 'preto',
    motor: '2.0',
    ano: '2021',
    Caracteristicas: "Flex, vidro elétrico 4 portas, ar condicionado, teto solar, Turbo",
    precoText: "R$ 273.937,00",
    preco: 273937
  },
  {
    urlImage: "https://cdn.motor1.com/images/mgl/MQWXX/s1/2020-honda-civic-si-coupe.jpg",
    Marca: "Honda",
    Modelo: 'Civic',
    EstadoVendedor: 'São Paulo',
    cor: 'branco',
    motor: '2.4',
    ano: '2021',
    Caracteristicas: "Flex, vidro elétrico 4 portas, ar condicionado, teto solar, Turbo",
    precoText: "R$ 122.866,00",
    preco: 122866
  },
  {
    urlImage: "https://cdn.motor1.com/images/mgl/3W1Wnj/s3/honda-city-2022---traseira.jpg",
    Marca: "Honda",
    Modelo: 'City',
    cor: 'branco',
    motor: '1.8',
    ano: '2021',
    EstadoVendedor: 'São Paulo',
    Caracteristicas: "Flex, vidro elétrico 4 portas, ar condicionado, teto solar, Turbo",
    precoText: "R$ 69.465,00",
    preco: 69465
  },
  {
    urlImage: "https://www.automaistv.com.br/wp-content/uploads/2020/08/honda_fit_19_edited-990x594.jpg",
    Marca: "Honda",
    Modelo: 'fit',
    cor: 'preto',
    motor: '2.0',
    EstadoVendedor: 'São Paulo',
    ano: '2021',
    Caracteristicas: "Flex, vidro elétrico 4 portas, ar condicionado, teto solar, Turbo",
    precoText: "R$ 54.421,00",
    preco: 54421
  }
]


function Dashboard() {

  const [items, setItems] = useState([]);
  const [option, setOption] = useState('original');
  const { estado } = React.useContext(AuthContext);
  const { year } = React.useContext(AuthContext);
  const { characteristics } = React.useContext(AuthContext);
  const { price } = React.useContext(AuthContext);

  useEffect(() => {
    if (estado) {
      const cars = arrayCars.filter((item) => item.EstadoVendedor === estado);
      setItems(cars);
      return;
    }
    if (year) {
      const carsYears = arrayCars.filter((item) => item.ano === year);
      setItems(carsYears);
      return;
    }
    if (characteristics) {
      const carsCharacteristics = arrayCars.filter((item) => item.motor === characteristics);
      setItems(carsCharacteristics);
    }
    if (price) {
      let filter = JSON.parse(price);
      console.log(arrayCars)
      
      const carsPrice = arrayCars.filter((item) => item.preco <= filter.max  && item.preco >= filter.min);
      setItems(carsPrice);
    }
    else{
      setItems([...arrayCars]);
    }

  }, [estado, year, characteristics, price]);

  return (
    <>
      <nav className="navbar">
        <NavBar />
      </nav>

      <main className="sideBar">
        {
          option === 'original'
            ?
            (
              <div className="containerSideBar">
                <div className="itensSidebar">
                  <p className="Models">Modelos</p>

                  <div className="plusButton">
                    <img src={plus} alt="" />
                  </div>
                </div>
                <div className="itensSidebar" onClick={() => setOption('city')}>
                  <p className="Models">Cidade</p>

                  <div className="plusButton">
                    <img src={plus} alt="" />
                  </div>
                </div>
                <div className="itensSidebar" onClick={() => setOption('price')}>
                  <p className="Models">Preços</p>

                  <div className="plusButton">
                    <img src={plus} alt="" />
                  </div>
                </div>
                <div className="itensSidebar" onClick={() => setOption('years')}>
                  <p className="Models">Ano</p>

                  <div className="plusButton">
                    <img src={plus} alt="" />
                  </div>
                </div>
                <div className="itensSidebar" onClick={() => setOption('characteristics')}>
                  <p className="Models">Caracteristicas</p>

                  <div className="plusButton">
                    <img src={plus} alt="" />
                  </div>
                </div>
              </div>
            )
            :
            (
              option === 'city' ? (
                <>
                  <City />
                </>
              )
                :
                (
                  option === 'price' ? (
                    <>
                      <Price />
                    </>
                  )
                    :
                    (
                      option === 'years' ? (
                        <>
                          <Years />
                        </>
                      )
                        :
                        (
                          option === 'characteristics' ? (
                            <>
                              <Characteristics />
                            </>
                          )
                            :
                            null
                        )
                    )
                )
            )
        }
      </main>
      <>
        <div className="main-container">
          <Container>
            <Row>
              {items.map((item, index) => {
                return (
                  <Col key={String(index)} style={{ margin: '10px' }}>
                    <Card style={{ width: '20rem', border: '1px solid rgb(70,70,70)' }}>
                      <Card.Img variant="top" src={item.urlImage} />
                      <Card.Body>
                        <Card.Title style={{ color: 'white' }}>{item.Marca + ' ' + item.Modelo + ' ' + item.cor}</Card.Title>
                        <Card.Text style={{ color: 'white', fontSize: '1rem' }}>
                          {item.Caracteristicas + ', ' + item.ano + ', motor ' + item.motor}
                        </Card.Text>
                        <br />
                        <Card.Text style={{ color: 'white', fontSize: '1rem' }}>
                          {item.precoText + ', ' + item.motor}
                        </Card.Text>
                        <Button variant="secondary" style={{ float: 'right', width: '100%' }}>Ver Mais</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })}
            </Row>
          </Container>
        </div>
      </>
    </>
  );

}

export default Dashboard;