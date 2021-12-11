import './Main.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import cardOne from './img/tim-mossholder-V37iTrYZz2E-unsplash.jpg';
import cardTwo from './img/samuele-errico-piccarini-MyjVReZ5GLQ-unsplash.jpg';
import cardThree from './img/sanjeevan-satheeskumar-iZp4h1gXiEQ-unsplash.jpg';
import cardMechanics from './img/mechanical-gears-.png';
import cardMechanicsTwo from './img/oleo-de-carro.png';
import cardMechanicsThree from './img/speedometer.png';
import cardMechanicsFour from './img/chassis.png';

function Main() {
    return (
        <>
            <div className="Main-Container">
                <Container>
                    <Row>
                        <Col>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <div style={{ color: 'white' }} className="body-page">
                                <h1 style={{ color: 'white' }} className="text-title">Nossos Serviços</h1>
                                <br />
                                <br />
                                <p style={{ color: 'white', fontSize: '1.1rem' }} className="body-paragraph">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, nulla similique, eligendi quae nam corporis deleniti officia enim quod cum veritatis? Veritatis amet voluptatum alias magnam repellat hic quis iusto.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, nulla similique, eligendi quae nam corporis deleniti officia enim quod cum veritatis? Veritatis amet voluptatum alias magnam repellat hic quis iusto.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, nulla similique, eligendi quae nam corporis deleniti officia enim quod cum veritatis? Veritatis amet voluptatum alias magnam repellat hic quis iusto.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, nulla similique, eligendi quae nam corporis deleniti officia enim quod cum veritatis? Veritatis amet voluptatum alias magnam repellat hic quis iusto.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, nulla similique, eligendi quae nam corporis deleniti officia enim quod cum veritatis? Veritatis amet voluptatum alias magnam repellat hic quis iusto.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, nulla similique, eligendi quae nam corporis deleniti officia enim quod cum veritatis? Veritatis amet voluptatum alias magnam repellat hic quis iusto.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, nulla similique, eligendi quae nam corporis deleniti officia enim quod cum veritatis? Veritatis amet voluptatum alias magnam repellat hic quis iusto.
                                    Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, nulla similique, eligendi quae nam corporis deleniti officia enim quod cum veritatis? Veritatis amet voluptatum alias magnam repellat hic quis iusto.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, nulla similique, eligendi quae nam corporis deleniti officia enim quod cum veritatis? Veritatis amet voluptatum alias magnam repellat hic quis iusto.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, nulla similique, eligendi quae nam corporis deleniti officia enim quod cum veritatis? Veritatis amet voluptatum alias magnam repellat hic quis iusto.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, nulla similique, eligendi quae nam corporis deleniti officia enim quod cum veritatis? Veritatis amet voluptatum alias magnam repellat hic quis iusto.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, nulla similique, eligendi quae nam corporis deleniti officia enim quod cum veritatis? Veritatis amet voluptatum alias magnam repellat hic quis iusto.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, nulla similique, eligendi quae nam corporis deleniti officia enim quod cum veritatis? Veritatis amet voluptatum alias magnam repellat hic quis iusto.
                                </p>
                                <Button style={{ width: "80%", backgroundColor: 'transparent', heigth: "100px", position: "relative", left: "5%", top: "10vh" }} variant="secondary">Veja as nossas peças</Button>
                            </div>
                        </Col>
                        <Col>
                            <div className="banners-price">
                                <div className="cards-contents" style={{ overflow: "hidden" }}>
                                    <img src={cardOne} style={{ width: "100%", top: "-15vh", position: "relative" }} alt="" />
                                </div>
                                <div className="cards-contents" style={{ overflow: "hidden" }}>
                                    <img src={cardTwo} style={{ width: "100%", top: "-20vh", position: "relative" }} alt="" />
                                </div>
                                <div className="cards-contents" style={{ overflow: "hidden" }}>
                                    <img src={cardThree} style={{ width: "100%", top: "-20vh", position: "relative" }} alt="" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <br />
            <div className="shop-elements">
                <Container>
                    <Row>
                        <Col sm>
                            <Card style={{ width: '18rem', backgroundColor: "transparent" }}>
                                <Card.Img variant="top" style={{ width: '150px', position: "relative", left: "20%" }} src={cardMechanics} />
                                <Card.Body>
                                    <Card.Title style={{ color: "white", textAlign: "center" }}>Manutenção Mecânica</Card.Title>
                                    <Card.Text style={{ color: "white", textAlign: "center", fontSize: '.9rem' }}>
                                        Troque as peças de seu automóvel, faça manutenção alterações no motor, embreagem e etc...
                                    </Card.Text>
                                    <Button variant="secondary" style={{ width: "100%", color: "white", backgroundColor: "rgba(70,70,70,.2)", border: "1px solid rgba(70,70,70,.5)" }} >Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem', backgroundColor: "transparent" }}>
                                <Card.Img variant="top" style={{ width: '150px', position: "relative", left: "20%" }} src={cardMechanicsTwo} />
                                <Card.Body>
                                    <Card.Title style={{ color: "white", textAlign: "center" }}>Troca de óleo</Card.Title>
                                    <Card.Text style={{ color: "white", textAlign: "center", fontSize: '.9rem' }}>
                                        Realize ordenadamente a troca de óleo do seu automóvel para um bom funcionamento.
                                    </Card.Text>
                                    <Button variant="secondary" style={{ width: "100%", color: "white", backgroundColor: "rgba(70,70,70,.2)", border: "1px solid rgba(70,70,70,.5)" }} >Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem', backgroundColor: "transparent" }}>
                                <Card.Img variant="top" style={{ width: '150px', position: "relative", left: "20%" }} src={cardMechanicsThree} />
                                <Card.Body>
                                    <Card.Title style={{ color: "white", textAlign: "center" }}>Alterações no motor</Card.Title>
                                    <Card.Text style={{ color: "white", textAlign: "center", fontSize: '.9rem' }}>
                                        Se você gosta de velocidade, faça alterações no motor para um melhor desempenho do automóvel.
                                    </Card.Text>
                                    <Button variant="secondary" style={{ width: "100%", color: "white", backgroundColor: "rgba(70,70,70,.2)", border: "1px solid rgba(70,70,70,.5)" }} >Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem', backgroundColor: "transparent" }}>
                                <Card.Img variant="top" style={{ width: '150px', position: "relative", left: "20%" }} src={cardMechanicsFour} />
                                <Card.Body>
                                    <Card.Title style={{ color: "white", textAlign: "center" }}>Trocamos as peças</Card.Title>
                                    <Card.Text style={{ color: "white", textAlign: "center", fontSize: '.9rem' }}>
                                        Trocamos peças ou colocamos modelos diferentes de peças onde o cliente decide o modelo.
                                    </Card.Text>
                                    <Button variant="secondary" style={{ width: "100%", color: "white", backgroundColor: "rgba(70,70,70,.2)", border: "1px solid rgba(70,70,70,.5)" }} >Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
}

export default Main;