import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./main-view.scss";

// import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
// import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { RegistrationView } from "../registration-view/registration-view";
import { DirectorView } from "../director-view/director-view";
import { GenreView } from "../genre-view/genre-view";
import { ProfileView } from "../profile-view/profile-view";
import { Navbar } from "../navbar/navbar";

export class MainView extends React.Component {

  constructor(){
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null
    };
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.username,
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.username);
    this.getMovies(authData.token);
  }

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
  }

// /* When a movie is clicked, this function is invoked and updates the state of the 'selectedMovie' property to that movie */
//   setSelectedMovie(movie) {
//     this.setState({
//       selectedMovie: movie
//     });
//   }

  getMovies(token) {
    axios.get('https://myflix14.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(response => {
      // Assign the result to the state
      this.setState({
        movies: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

/* When a user successfully logs in, this function updates the 'user' property in state to that particular user */

  render() {
    const { movies, selectedMovie, user } = this.state;

    /* If there is no user, the LoginView is rendered.  If there is a user logged in, the user details are passed as a prop to the LoginView */
    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

    // Before the movies have been loaded
    if (movies.length === 0) return <div className="main-view" />;

    return (
      <Router>
        <MyFlixNavbar user={user} onLogOut={() => this.onLoggedOut()} />
        <Row className="main-view justify-content-md-center mt-1">
          <Route
            exact path="/"
            render={() => {
              if (!user)
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );
              if (movies.length === 0) return <div className="main-view" />;
              return <MoviesList movies={movies} />;
            }}
          />
          <Route
            exact path="/register"
            render={({ history }) => {
              if (user) return <Redirect to="/" />;
              return (
                <Col>
                  <RegistrationView
                    onSucessfulRegistration={() => history.push("/")}
                  />
                </Col>
              );
            }}
          />
          <Route
            exact path="/movies/:movieId"
            render={({ match, history }) => {
              if (!user)
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );
              if (movies.length === 0) return <div className="main-view" />;
              return (
                <Col md={8}>
                  <MovieView
                    movie={movies.find((m) => m._id === match.params.movieId)}
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
            }}
          />
          <Route
            exact path="/directors/:name"
            render={({ match, history }) => {
              if (!user)
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );
              if (movies.length === 0) return <div className="main-view" />;
              return (
                <Col md={8}>
                  <DirectorView
                    director={
                      movies.find((m) => m.Director.Name === match.params.name)
                        .Director
                    }
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
            }}
          />
          <Route
            exact path="/genres/:name"
            render={({ match, history }) => {
              if (!user)
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );
              if (movies.length === 0) return <div className="main-view" />;
              return (
                <Col md={8}>
                  <GenreView
                    genre={
                      movies.find((m) => m.Genre.Name === match.params.name)
                        .Genre
                    }
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
            }}
          />
          <Route
            exact path="/profile"
            render={({ history }) => {
              if (!user)
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );
              if (movies.length === 0) return <div className="main-view" />;
              return (
                <Col md={12} className="px-0">
                  <ProfileView
                    movies={movies}
                    onBackClick={() => history.goBack()}
                    onDeletedUser={() => this.onLoggedOut()}
                    onUpdatedUser={(newUserInfo) =>
                      this.onUpdatedUser(newUserInfo)
                    }
                  />
                </Col>
              );
            }}
          />
        </Row>
      </Router>
    );
  }
}

export default MainView;