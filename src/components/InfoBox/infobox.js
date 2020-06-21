import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const InfoBox = ({ movieId, location }) => (
  <div>
    <Link
      to={{
        pathname: `/movies/${movieId}/cast`,
        state: { from: { ...location } },
      }}
      replace
    >
      Cast
    </Link>
    <br />
    <Link
      to={{
        pathname: `/movies/${movieId}/reviews`,
        state: { from: { ...location } },
      }}
      replace
    >
      Reviews
    </Link>
  </div>
);

InfoBox.propTypes = {
  movieId: PropTypes.string.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.shape({}),
    }),
  }).isRequired,
};

export default InfoBox;