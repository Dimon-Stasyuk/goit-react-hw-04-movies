import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import Navigation from "./Navigation/Navigation";

const HomePage = lazy(() =>
  import("./HomePage/HomePage" /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import("./MoviesPage/MoviesPage" /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    "./MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "movies-detail-page" */
  ),
);

function App() {
  return (
    <>
      <Navigation />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>

          <Route path='/movies' exact>
            <MoviesPage />
          </Route>

          <Route path='/movies/:movieId'>
            <MovieDetailsPage />
          </Route>

          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
