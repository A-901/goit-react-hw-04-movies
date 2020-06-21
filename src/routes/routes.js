import { lazy } from "react";

const AsyncHomePage = lazy(() =>
  import("../components/pages/HomePage" /* webpackChunkName: "HomePage-page" */)
);

const AsyncMoviesPage = lazy(() =>
  import("../components/pages/MoviesPage" /* webpackChunkName: "MoviesPage-page" */)
);

const AsyncMovieDetailsPage = lazy(() =>
  import(
    "../components/pages/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage-page" */
  )
);

const AsyncCast = lazy(() =>
  import("../components/pages/Cast" /* webpackChunkName: "Cast-page" */)
);

const AsyncRewiews = lazy(() =>
  import("../components/pages/Reviews" /* webpackChunkName: "Reviews-page" */)
);

export default {
  HOME_PAGE: {
    path: "/",
    component: AsyncHomePage,
  },
  MOVIES_PAGE: {
    path: "/movies",
    component: AsyncMoviesPage,
  },
  MOVIES_DETAILS_PAGE: {
    path: "/movies/:movieId",
    component: AsyncMovieDetailsPage,
  },
  CAST_PAGE: {
    path: "/movies/:movieId/cast",
    component: AsyncCast,
  },
  REVIEWS_PAGE: {
    path: "/movies/:movieId/reviews",
    component: AsyncRewiews,
  },
};