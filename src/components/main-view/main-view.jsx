import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';


export class MainView extends React.Component {
  constructor() {
     super();
     this.state = {
      movies: [
        {
          _id: "63361cd1170e226647cef9e4",
          Title: "Interstellar'",
          Description: "A team of explorers travel through a wormhole in space in an attempt to ensure the survival of humanity.",
          Genre: {
            Name: "SciFi",
            Description: "Science fiction (or sci-fi) is a film genre that uses speculative, fictional science-based depictions of phenomena that are not fully accepted by mainstream science, such as extraterrestrial lifeforms, spacecraft, robots, cyborgs, interstellar travel or other technologies.",
          },
          Director: {
            Name: "Christopher Nolan",
            Bio: "Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made.",
            Birth: "1970",
            Death: ""
          },
          ImagePath: "https://www.imdb.com/title/tt0816692/mediaviewer/rm4043724800/?ref_=tt_ov_i",
          Actors: [ "Matthew McConaughey", "Anne Hathaway", "Jessica Chastain" ],
          Featured: true
        },
        {
      
          _id: "63361cf3170e226647cef9e5",
          Title: "Inception",
          Description: "A thief who steals corporate secrets through the use of dream sharing. A father who is willing to do whatever it takes to get home.",
          Genre: {
            Name: "SciFi",
            Description: "Science fiction (or sci-fi) is a film genre that uses speculative, fictional science-based depictions of phenomena that are not fully accepted by mainstream science, such as extraterrestrial lifeforms, spacecraft, robots, cyborgs, interstellar travel or other technologies.",
          },
          Director: {
            Name: "Christopher Nolan",
            Bio: "Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made.",
            Birth: "1970",
            Death: ""
          },
          ImagePath: "https://www.imdb.com/title/tt1375666/mediaviewer/rm3426651392/?ref_=tt_ov_i",
          Actors: [ "Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page" ],
          Featured: true
        },
        {
          _id: "63361cf3170e226647cef9e8",
          Title: "Star Wars: Episode III - Revenge of the Sith",
          Description: "Three years into the Clone Wars, the Jedi rescue Palpatine from Count Dooku. As Obi-Wan pursues a new threat, Anakin acts as a double agent between the Jedi Council and Palpatine and is lured into a sinister plan to rule the galaxy.",
          Genre: {
            Name: "SciFi",
            Description: "Science fiction (or sci-fi) is a film genre that uses speculative, fictional science-based depictions of phenomena that are not fully accepted by mainstream science, such as extraterrestrial lifeforms, spacecraft, robots, cyborgs, interstellar travel or other technologies. Science fiction films have often been used to focus on political or social issues, and to explore philosophical issues like the human condition.",
          },
          Director: {
            Name: "George Lucas",
            Bio: "American filmmaker, writer, philanthropist and businessman. Lucas is best known for creating the Star Wars and Indiana Jones franchises and founding Lucasfilm, LucasArts, and Industrial Light & Magic. He served as president of Lucasfilm before selling it to The Walt Disney Company in 2012.",
            Birth: "1944",
            Death: ""
          },
          ImagePath: "https://www.imdb.com/title/tt0121766/mediaviewer/rm4094016256/?ref_=tt_ov_i",
          Actors: [ "Hayden Christensen", "Natalie Portman", "Ewan McGregor" ],
          Featured: true
        }
      ]
     }
  }
    setSelectedMovie(newSelectedMovie) {
      this.setState({
        selectedMovie: newSelectedMovie
      });
    }
    
    render() {
      const { movies, selectedMovie } = this.state;
  
  
      if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
  
      return (
        <div className="main-view">
          {selectedMovie
            ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
            : movies.map(movie => (
              <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
            ))
          }
        </div>
      );
    }
   }