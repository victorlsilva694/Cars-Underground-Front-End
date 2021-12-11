import "./Register.css";
import { useState } from "react";
import { FloatingLabel, Form, Button, Col, Row } from "react-bootstrap";
import wallPaperLogin from './img/fakurian-design-_zSZVxZWhkY-unsplash.jpg';
import api from '../../services/api';
import { useHistory, } from 'react-router-dom';

function Register() {
  const [collorButton, setCollorButton] = useState("primary");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [rg, setRg] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const SendRegister = async () => {
    const user = {
      name: name,
      lastName: lastName,
      cpf: cpf,
      rg: rg,
      email: email,
      password: password,
    };
    try {
      const results = await api.post("http://localhost:3333/register/save", user);
      if (results.status === 201) {
        history.push('/login');
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
      <Row>
        <Col>
          <div className="wallpaper">
            <img style={{width: '100%', height: '100vh'}} src={wallPaperLogin} />
          </div>
        </Col>
        <Col>
            <h1 className="title-login">Registre-se <strong><span style={{fontWeight: "bold" ,color: "#428D96"}}>Underground</span></strong> Shop</h1>
            <div className="form-login"> 
              <Row className="g-2">
                <Col md>
                <Form.Floating className="mb-3" >
                    <Form.Control
                      id="floatingInputCustom"
                      type="text"
                      name="name"
                      placeholder="Nome"
                      onChange={({ ...e }) => {
                        setName(e.target.value);
                      }}
                    />
                    <label style={{backgroundColor: 'transparent', color: 'black'}} htmlFor="floatingInputCustom">Nome</label>
                  </Form.Floating>
                </Col>
                <Col md>
                <Form.Floating className="mb-3" >
                    <Form.Control
                      id="floatingInputCustom"
                      type="text"
                      name="lastName"
                      placeholder="Sobrenome"
                      onChange={({ ...e }) => {
                        setLastName(e.target.value);
                      }}
                    />
                    <label style={{backgroundColor: 'transparent', color: 'black'}} htmlFor="floatingInputCustom">Sobrenome</label>
                  </Form.Floating>
                </Col>
              </Row>
             
              <Row className="g-2">
                <Col md>
                <Form.Floating className="mb-3" >
                    <Form.Control
                      id="floatingInputCustom"
                      type="text"
                      name="rg"
                      placeholder="12345645125-05"
                      onChange={({ ...e }) => {
                        setRg(e.target.value);
                      }}
                    />
                    <label style={{backgroundColor: 'transparent', color: 'black'}} htmlFor="floatingInputCustom">Número do RG</label>
                  </Form.Floating>
                </Col>
                <Col md>
                <Form.Floating className="mb-3" >
                    <Form.Control
                      id="floatingInputCustom"
                      type="text"
                      name="CPF"
                      placeholder="123.456.789-01"
                      onChange={({ ...e }) => {
                        setCpf(e.target.value);
                      }}
                    />
                    <label style={{backgroundColor: 'transparent', color: 'black'}} htmlFor="floatingInputCustom">Número do CPF</label>
                  </Form.Floating>
                </Col>

                <Form.Floating className="mb-3">
                  <Form.Control
                      id="floatingInputCustom"
                      type="email"
                      placeholder="name@example.com"
                      onChange={({ ...e }) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <label style={{backgroundColor: 'transparent', color: 'black'}} htmlFor="floatingInputCustom">Endereço de e-mail</label>
                  </Form.Floating>
                  <Form.Floating>
                  <Form.Control
                      id="floatingPasswordCustom"
                      type="password"
                      placeholder="Password"
                      onChange={({ ...e }) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <label style={{backgroundColor: 'transparent', color: 'black'}} htmlFor="floatingPasswordCustom">Senha</label>
                  </Form.Floating>
              </Row>
              <br />
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Check 
                      style={{color: 'white'}}
                      required
                      label="Quero me manter logado"
                      feedback="You must agree before submitting."
                      feedbacktype="invalid"
                    />
                  </Form.Group>
                </Col>
                <Col>
                    <a style={{float: "right", color: 'dodgerblue', textDecoration: 'none'}} href="/register">Criar sua conta</a>
                </Col>
              </Row>
              <Button variant="primary" onClick={SendRegister} style={{width: '100%', height: '60px'}}>Registre-se</Button>
            </div>
        </Col>
      </ Row>
      
  );
}

export default Register;
