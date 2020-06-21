import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as API from "../../services/api";

class HomePage extends Component {
  static propTypes = {
    location: PropTypes.shape({
      state: PropTypes.shape({
        from: PropTypes.shape({}),
      }),
    }).isRequired,
  };

  state = {
    movies: [],
    error: null,
  };

  componentDidMount() {
    API.fetchMostPopularMovies()
      .then((res) => this.setState({ movies: res.data.results }))
      .catch((err) =>
        this.setState({
          error: err.message,
        })
      );
  }

  render() {
    const { movies, error } = this.state;
    const { location } = this.props;

    return (
      <div>
        <h2>Best of the best</h2>
        {error && <p>Today is not a good day</p>}
        {movies.length > 0 && (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: { from: { ...location } },
                  }}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default HomePage;