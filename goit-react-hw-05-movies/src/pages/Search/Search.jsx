import { useSearchParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { serverSearch } from 'server/api';
import Form from 'components/Form/Form';
import MovieList from 'pages/MovieList/MovieList';
import { Main, TextError } from 'pages/MovieList/MovieList.styled';
import { Loader } from 'components/Loader/Loader';

export default function Search() {
  const [value, setValue] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const moviesName = searchParams.get('name') ?? '';
  const histori = window.location.search.split('=')[1];

  useEffect(() => {
    if (!value && !histori) {
      return;
    }
    if (!value) {
      serverData(histori);
      return;
    }

    serverData(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  function onSubmit(event) {
    event.preventDefault();
    setValue(event.target.name.value);
  }

  function onChang(name) {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  }

  async function serverData(name) {
    setError(false);
    setLoader(true);
    const data = await serverSearch(name);
    const results = await data.results;
    setMoviesList(results);
    if (!results.length) {
      setError(true);
    }
    setLoader(false);
  }

  return (
    <Main>
      <section>
        <Form submit={onSubmit} value={moviesName} onChang={onChang} />
        {loader && <Loader />}
        {error && (
          <TextError>
            Вибачте але ми нічого не занйщли. Нам жуже сумно &#128557; Спробуйте
            ще раз
          </TextError>
        )}
        <MovieList list={moviesList} />
      </section>
    </Main>
  );
}
