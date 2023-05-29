import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AppBar from 'pages/Header/AppBar';
import { Fon } from 'App.styled';
import fonImg from './img/fon.jpg';
import { PreLoader } from 'components/PreLoader/PreLoader';

const createAsyncComponent = path => lazy(() => import(`${path}`));

const MoviesList = createAsyncComponent('./pages/MovieList/MovieList.jsx');
const Search = createAsyncComponent('./pages/Search/Search.jsx');
const Movie = createAsyncComponent('./pages/Movie/Movie.jsx');
const Cast = createAsyncComponent('./pages/Cast/Cast.jsx');
const Reviews = createAsyncComponent('./pages/Reviews/Reviews.jsx');
const PageNotFound = createAsyncComponent(
  './pages/PageNotFound/PageNotFound.jsx'
);

export const App = () => {
  return (
    <>
      <PreLoader />
      <Fon img={fonImg}>
        <Routes>
          <Route path="/" exact element={<AppBar />}>
            <Route index element={<MoviesList />} />
            <Route path="movies" element={<Search />} />
            <Route path="movies/:id" element={<Movie />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Fon>
    </>
  );
};
