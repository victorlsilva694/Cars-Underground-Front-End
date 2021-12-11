import "./Login.css";
import { FloatingLabel, Form, Button, Container, Row, Col } from "react-bootstrap";
import wallPaperLogin from './img/fakurian-design-_zSZVxZWhkY-unsplash.jpg';
import { useState, useContext } from "react";
import api from '../../services/api';
import { useHistory, } from 'react-router-dom';
import { RouterContext } from '../../App';
//Não seria viavel usar desse jeito a validação de input

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setAuthentication] = useContext(RouterContext);
  const history = useHistory();
  const loginPage = async () => {
    const user = {
      email: email,
      password: password,
    };
    try {
      const results = await api.post("http://localhost:3333/login/auth", {user});
      const token = results.data.token;
      localStorage.setItem('token', token)
      history.push('/User/DashBoard');
      setAuthentication(true);
    } catch (err) {
      console.dir(err);
    }
  }

  return (
    <Row style={{position: 'relative', left: '-100px'}} >
      <Col>
        <div className="wallpaper">
          <img style={{width: '100%', height: '100vh'}} src={wallPaperLogin} />
        </div>
      </Col>
      <Col style={{border: '1px solid white,', overflow:'hidden' }}>
        <h1 className="title-login">Entre <strong><span style={{fontWeight: "bold" ,color: "#428D96"}}>Underground</span></strong> Shop</h1>
        <div className="form-login">
        <>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              placeholder="name@example.com"
              onChange={({ ...e }) => {
                setEmail(e.target.value);
              }}
            />
            <label style={{backgroundColor: 'transparent', color: 'black',  fontSize: '1.1rem'}} htmlFor="floatingInputCustom">Email address</label>
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
            <label style={{backgroundColor: 'transparent', color: 'black',  fontSize: '1.1rem'}} htmlFor="floatingPasswordCustom">Password</label>
          </Form.Floating>
          <br />
          <br />
          <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Check 
                  style={{color: 'white', fontSize: '1rem'}}
                  required
                  label="Quero me manter logado"
                  feedback="You must agree before submitting."
                  feedbacktype="invalid"
                />
            </Form.Group>
          </Col>
          <Col>
            <a style={{float: "right", fontSize: '1rem', color: 'dodgerblue', textDecoration: 'none'}} href="/register">Criar sua conta</a>
          </Col>
        </Row>
          <Button variant="primary" onClick={loginPage} style={{width: '100%', height: '60px'}}>Fazer Login</Button>
        </>
        </div>
      </Col>
    </Row>
  );
}

export default Login;
