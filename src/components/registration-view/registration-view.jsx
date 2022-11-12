import React, {useState} from 'react';
import PropTypes from 'prop-types';
// import axios from "axios";

export function RegistrationView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  
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
    <form>
      <h1>New User Registration</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        Birthday:
        <input type="birthday" value={birthday} onChange={e => setBirthday(e.target.value)} />
      </label>
      <button type="submit" onClick={handleSubmit}>Register</button>
      <button type="button" onClick={() => {props.onBackClick(null);}}>Return to Login Page</button>
    </form>
  );
}

RegistrationView.propTypes = {
  onRegistration: PropTypes.func.isRequired,
};