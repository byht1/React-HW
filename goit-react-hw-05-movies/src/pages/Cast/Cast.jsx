import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { serverActors, IMG_URL } from 'server/api';
import { GridBox, Name, BoxName, Img, Elements } from './Cast.styled';
import anonim from '../../img/anonim.jpg';

export default function Cast() {
  const { id } = useParams();
  const [castList, setCastList] = useState([]);
  useEffect(() => {
    serverData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function serverData() {
    const data = await serverActors(id);
    const cast = await data.cast;
    setCastList(cast);
  }

  return (
    <GridBox>
      {castList.map(({ id, profile_path, name, character }) => {
        return (
          <Elements key={id}>
            <Img
              src={profile_path ? IMG_URL + profile_path : anonim}
              alt={`фото актора ${name}`}
            />
            <BoxName>
              <Name>{name}</Name>
              <p>{character}</p>
            </BoxName>
          </Elements>
        );
      })}
    </GridBox>
  );
}
