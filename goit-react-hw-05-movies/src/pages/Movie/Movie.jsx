import { Container } from 'App.styled';
import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { IMG_URL, serverMovie } from 'server/api';
import defoltImg from '../../img/defolt-poster.jpg';
import {
  ContainerMovie,
  Img,
  InfoMovie,
  Title,
  TextDecoration,
  ButtonGoBack,
  Section,
  LinkA,
  ListLink,
} from './Movie.styled';
import { Loader } from './../../components/Loader/Loader';

export default function Movie() {
  const { id } = useParams();
  const [movieCard, setMovieCard] = useState({});
  const [goBack, setGoBack] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    serverDate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function goBackPage() {
    navigate(-goBack);
    setGoBack(1);
    return;
  }

  async function serverDate() {
    const data = await serverMovie(id);
    setMovieCard(data);
  }

  const {
    poster_path,
    title,
    release_date,
    vote_average,
    genres,
    runtime,
    overview,
  } = movieCard;

  return (
    <main>
      <ButtonGoBack onClick={goBackPage}>
        <IoIosArrowBack size={40} /> Go Back
      </ButtonGoBack>
      <Section>
        <Container>
          <ContainerMovie>
            <Img
              src={poster_path ? IMG_URL + poster_path : defoltImg}
              alt={`постер до фільму ${title}`}
            />
            <InfoMovie>
              <table class="iksweb">
                <tbody>
                  <tr>
                    <td>Назва:</td>
                    <td>{title}</td>
                  </tr>
                  <tr>
                    <td>Дата виходу:</td>
                    <td>{release_date}</td>
                  </tr>
                  <tr>
                    <td>Рейтинг:</td>
                    <td>{vote_average}</td>
                  </tr>
                  <tr>
                    <td>Жанр фільму:</td>
                    <td>
                      {genres &&
                        genres.map(
                          (x, i, arr) =>
                            `${x.name} ${arr.length - 1 === i ? '' : '/'} `
                        )}
                    </td>
                  </tr>
                  <tr>
                    <td>Протяжність фільму:</td>
                    <td>{runtime} хвилин</td>
                  </tr>
                </tbody>
              </table>
              <p>
                <TextDecoration>Коротко про фільм:</TextDecoration> {overview}
              </p>
              {/* <div>
                <p>
                  <TextDecoration></TextDecoration>
                </p>
                <p>
                  <TextDecoration></TextDecoration>
                </p>
                <p>
                  <TextDecoration></TextDecoration>{' '}
                </p>
                <p>
                  <TextDecoration></TextDecoration>
                </p>
              </div> */}
              <ListLink>
                <li>
                  <LinkA to="cast" onClick={() => setGoBack(prev => prev + 1)}>
                    Актори
                  </LinkA>
                </li>
                <li>
                  <LinkA
                    to="reviews"
                    onClick={() => setGoBack(prev => prev + 1)}
                  >
                    Відгуки
                  </LinkA>
                </li>
              </ListLink>
            </InfoMovie>
          </ContainerMovie>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Section>
    </main>
  );
}
