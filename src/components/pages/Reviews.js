import React, { Component } from "react";
import * as API from "../../services/api";
import PropTypes from "prop-types";

class Reviews extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        movieId: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    reviews: [],
    error: null,
  };

  componentDidMount() {
    const { match } = this.props;

    API.fetchMovieReviews(match.params.movieId)
      .then((res) => this.setState({ reviews: res.data.results }))
      .catch((err) =>
        this.setState({
          error: err.message,
        })
      );
  }

  render() {
    const { reviews, error } = this.state;

    return (
      <div>
        {error && <h2>Today is not a good day</h2>}
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <p>{`Author: ${review.author}`}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We do not have any reviews for this movie</p>
        )}
      </div>
    );
  }
}

export default Reviews;