import React, { Component } from "react";
import axios from "axios";

import "./MovieList.css";
class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    axios

      .get(
        "https://api.nytimes.com/svc/movies/v2/reviews/picks.json?offset=15&order=by-publication-date&api-key=om23xJuIbQX5Y6A2SfqW1uADirbO89Xy"
      )
      .then((users) => {
        this.setState({
          movies: users.data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="home">
          {" "}
          <h3 className="card">My movie review</h3>
        </div>

        {this.state.movies.map((movies, idx) => (
          <div key={idx}>
            <div className="media media-container">
              <div className="media-left media-middle">
                <img
                  src={movies.multimedia.src}
                  alt="pic"
                  className="media-object object"
                  width="100%"
                  height="130vh"
                />
              </div>
              <div className="media-body content">
                <h5>
                  display_title :{" "}
                  <span className="media-heading media-head">
                    {movies.display_title}
                  </span>
                </h5>
                <p>headline : {movies.headline}</p>
                <p>critics_pick :{movies.critics_pick}</p>
                <p>byline : {movies.byline}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Movies;
