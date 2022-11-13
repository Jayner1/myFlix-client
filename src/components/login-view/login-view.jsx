import React, { useState } from 'react';
import { Form,Button,Card,CardGroup,Container,Col,Row, } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import "./login-view.scss";

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const [usernameErr, setUsernameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');  

  const validate = () => {
    let isReq = true;
    if (!username) {
      setUsernameErr('Username required');
      isReq = false;
    } else if (username.length < 5) {
      setUsernameErr('Username must be 5 or more characters');
      isReq = false;
    }
    if (!password) {
      setPasswordErr('Password required');
      isReq = false;
    } else if (password.length < 4) {
      setPasswordErr('Password must be 6 or more characters');
      isReq = false;
    }

    return isReq;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      axios
        .post('https://myflix14.herokuapp.com/login', {
          Username: username,
          Password: password,
        })
        .then((res) => {
          const data = res.data;
          props.onLoggedIn(data);
        })
        .catch((e) => {
          console.log('User does not exist');
        });
    }
  };

  return (
    <Container className='registration' lg={4}>
      <Row>
        <Col className='d-flex justify-content-center'>
          <CardGroup className='login-signup'>
            <Card>
              <Card.Body>
                <Card.Title className='text-center mb-4'>Login</Card.Title>
                <Form>
          <Form.Group
            className="login-form-group-username"
            controlId="formUsername"
          >
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {usernameErr && <p>{usernameErr}</p>}
                  </Form.Group>
                  <Form.Group className="form-group-password" controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordErr && <p>{passwordErr}</p>}
          </Form.Group>
              
                  <div className='d-grid gap-2'>
                    <Button
                      className='d-flex justify-content-center'
                      variant='primary'
                      type='submit'
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </div>
                  <p className='mt-5 text-center'>
                    Don't have an account? <br />
                    <Button
                      className='mt-2 d-flex justify-content-center'
                      variant='primary'
                      href={"/register"}
                    >
                      Sign up
                    </Button>
                  </p>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}