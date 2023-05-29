import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IMG_URL, serverHitsList } from 'server/api';
import {
  List,
  Elements,
  ElementsBox,
  TextBox,
  Title,
  Rating,
  TitleH1,
} from './MovieList.styled';

export default function MovieList({ list }) {
  const [movie, setMovie] = useState([]);
  const [title, setTitle] = useState(true);
  const location = useLocation();
  const url = location.pathname === '/' ? `movies/` : '';

  useEffect(() => {
    if (list) {
      setTitle(false);
      setMovie(list);
      return;
    }
    dataList();
  }, [list]);

  async function dataList() {
    const data = await serverHitsList();
    const hits = await data.results.map(x => {
      return Object.fromEntries(
        Object.entries(x).filter(([key]) =>
          [
            'id',
            'poster_path',
            'title',
            'genre_ids',
            'release_date',
            'vote_average',
          ].includes(key)
        )
      );
    });

    setMovie(hits);
  }

  return (
    <section>
      {title && <TitleH1>Список нових фільмів</TitleH1>}

      <List>
        {movie.map(({ id, poster_path, title, release_date, vote_average }) => {
          return (
            <Elements key={id}>
              <Link to={`${url}${id}`}>
                <img src={IMG_URL + poster_path} alt={title} />
                <ElementsBox>
                  <Title>{title}</Title>
                  <TextBox>
                    <p>{release_date}</p>
                    <Rating rating={vote_average}>
                      {vote_average.toFixed(1)}
                    </Rating>
                  </TextBox>
                </ElementsBox>
              </Link>
            </Elements>
          );
        })}
      </List>
    </section>
  );
}

MovieList.propTypes = {
  list: PropTypes.array,
};
