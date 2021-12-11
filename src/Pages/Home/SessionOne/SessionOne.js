import './SessionOne.css';
import React, { useState } from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import bmwImageOne from './img/front-bmw-car.jpg';
import bmwImageTwo from './img/BMW-Car-Wallpaper-4k.jpg';
import bmwImageThree from './img/1920x1080-3392-bmw-car-front-view-black-4k.jpg';
import hyundaiImageOne from './img/Hyundai-white-car-front-view_3840x2160.jpg';
import hyundaiImageTwo from './img/wp4243431.jpg';
import hyundaiImageThree from './img/Hyundai-Santa-Fe-white-SUV-side-view_3840x2160.jpg';
import hondaImageOne from './img/honda--fk-type-r-honda--wallpaper.jpg';
import hondaImageTwo from './img/honda_civic_hatchback_2019_4k-HD.jpg';
import hondaImageThree from './img/maxresdefault.jpg';



function SessionOne() {

    const [selected, setSelected] = useState('Bmw');

    return (
        <div className="Body-Header" >
            <Container style={{ width: "80%", height: "60vh", backgroundColor: "transparent" }}>
                <br />
                <Row>
                    <Col sm>
                        <Button
                            style={{ width: "100%", height: "50px", backgroundColor: "rgba(108, 117, 125,.2)", border: "1px solid rgba(108, 117, 125,.2)" }} onClick={(e) => setSelected("Bmw")} variant="secondary">BMW</Button>
                    </Col>
                    <Col sm>
                        <Button
                            style={{ width: "100%", height: "50px", backgroundColor: "rgba(108, 117, 125,.2)", border: "1px solid rgba(108, 117, 125,.2)" }} onClick={(e) => setSelected("Hyundai")} variant="secondary">Hyundai</Button>
                    </Col>
                    <Col sm>
                        <Button
                            style={{ width: "100%", height: "50px", backgroundColor: "rgba(108, 117, 125,.2)", border: "1px solid rgba(108, 117, 125,.2)" }} onClick={(e) => setSelected("Honda")} variant="secondary">Honda</Button>{' '}
                    </Col>
                </Row>
                <br />
                        {
                        selected === "Bmw" ? 
                            (
                                <>
                                <div className="carouselButton" style={{ position: "relative" }}>
                                    <Carousel style={{ backgroundColor: "transparent" }}>
                                        <Carousel.Item>
                                            <img 
                                                className="d-block w-100"
                                                src={bmwImageOne}
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={bmwImageTwo}
                                                alt="Second slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={bmwImageThree}
                                                alt="Third slide"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                                </>

                            )

                        :

                        (selected === "Hyundai" ? 
                        
                        (
                            <>
                                <div className="carouselButton" style={{ position: "relative" }}>
                                    <Carousel style={{ backgroundColor: "transparent" }}>
                                        <Carousel.Item>
                                            <img 
                                                className="d-block w-100"
                                                src={hyundaiImageOne}
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={hyundaiImageTwo}
                                                alt="Second slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={hyundaiImageThree}
                                                alt="Third slide"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </>
                        )
                        : (selected === "Honda" ? 
                        (
                            <>
                               <div className="carouselButton" style={{ position: "relative" }}>
                                    <Carousel style={{ backgroundColor: "transparent" }}>
                                        <Carousel.Item>
                                            <img 
                                                className="d-block w-100"
                                                src={hondaImageOne}
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={hondaImageTwo}
                                                alt="Second slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={hondaImageThree}
                                                alt="Third slide"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </>
                        )
                        :
                        null
                        ) 
                        ) 
                    }
                    
            </Container>

        </div>
    )
}

export default SessionOne;

/**<div className="Body-Header">
            <h1 className="Text-Header">
                Crie agora a sua playlist de videos favorita!
            </h1>

            <div className="Buttons-Header">
                <div className="Buttons">
                    <button id="Btn-Explore">
                        Explorar
                    </button>
                </div>
                <div className="Buttons">
                    <button id="Btn-Login">
                        Entrar agora
                    </button>
                </div>
            </div>

            <div className="Mini-Cards">
                <div className="MiniCard-One">
                    <img className="Img-Cards" src={Desktop} />
                    <h1 className="Title-Card">Estudos</h1>
                </div>
                <div className="MiniCard-Two">
                    <img className="Img-Cards" src={Musics} />
                    <h1 className="Title-Card">Musicas</h1>
                </div>
                <div className="MiniCard-Three">
                    <img className="Img-Cards" src={Podcast} />
                    <h1 className="Title-Card">Podcast</h1>
                </div>
                <div className="MiniCard-Four">
                    <img className="Img-Cards" src={Console} />
                    <h1 className="Title-Card">Jogos</h1>
                </div>
            </div>
        </div> */