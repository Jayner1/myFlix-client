import React, {useState} from 'react';
import axios from "axios";
import { Form, Button, Card } from 'react-bootstrap';

import "./registration-view.scss";

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [usernameErr, setUsernameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  
  const validate = () => {
    let isReq = true;
    if (!username) {
      setUsernameErr(<span style={{ color: "red" }}>Username Required</span>);
      isReq = false;
    } else if (username.length < 2) {
      setUsernameErr(
        <span style={{ color: "red" }}>
          Username must have at least 2 characters
        </span>
      );
      isReq = false;
    }
    if (!password) {
      setPasswordErr(<span style={{ color: "red" }}>Password Required</span>);
      isReq = false;
    } else if (password.length < 6) {
      setPasswordErr(
        <span style={{ color: "red" }}>
          Password must have at least 6 characters
        </span>
      );
      isReq = false;
    }
    if (!email) {
      setEmailErr(<span style={{ color: "red" }}>Email Required</span>);
      isReq = false;
    } else if (email.indexOf("@") === -1) {
      setEmailErr(
        <span style={{ color: "red" }}>Please enter correct email address</span>
      );
      isReq = false;
    }
    return isReq;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday);
    props.Registration(username);
  };

  axios.post('https://myflix14.herokuapp.com/users', {
    Username: username,
    Password: password,
    Email: email,
    Birthday: birthday
  })
  .then(response => {
    const data = response.data;
    console.log(data);
    window.open('/', '_self'); // the second argument '_self' is necessary so that the page will open in the current tab
  })
  .catch(e => {
    console.log('error registering the user')
  });

  return (
    <Card bg="dark" text="light" className="registration-card">
      <Card.Header className="text-center" as="h5">
        Register
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group
            className="registration-form-group-username"
            controlId="formGroupUsername"
          >
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
            {usernameErr && <p>{usernameErr}</p>}
          </Form.Group>
          <Form.Group
            className="registration-form-group-password"
            controlId="formGroupPassword"
          >
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password must be 6 or more characters"
              minLength="6"
              required
            />
            {passwordErr && <p>{passwordErr}</p>}
          </Form.Group>
          <Form.Group
            className="registration-form-group-email"
            controlId="formGroupEmail"
          >
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            />
            {emailErr && <p>{emailErr}</p>}
          </Form.Group>
          <Form.Group controlId="formGroupBirthday">
            <Form.Label>Date of birth:</Form.Label>
            <Form.Control
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              placeholder="Enter your birthday"
            />
            {birthdayErr && <p>{birthdayErr}</p>}
          </Form.Group>
          <Button
            className="button-registration-view"
            variant="secondary"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

RegistrationView.propTypes = {};