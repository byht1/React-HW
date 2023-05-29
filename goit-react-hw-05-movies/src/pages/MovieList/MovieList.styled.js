import styled from '@emotion/styled';

export const Main = styled.main`
  padding: 20px 0;
`;

export const TitleH1 = styled.h1`
  font-family: 'Orbitron', sans-serif;
  text-align: center;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  max-width: 100vw - 45px;
  gap: 15px;
  margin-top: 20px;
`;

export const Elements = styled.li`
  position: relative;
  height: 100%;
`;

export const ElementsBox = styled.div`
  padding: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  color: #fff;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.2em;
`;

export const TextBox = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Rating = styled.p`
  padding: 3px;
  border: 2px solid;
  border-radius: 50%;
  border-color: ${props => props.rating >= 7.5 && 'green'};
  border-color: ${props =>
    props.rating < 7.5 && props.rating >= 5.6 && 'orange'};
  border-color: ${props => props.rating <= 5.5 && 'red'};
  border-color: ${props => props.rating === 0 && '#fff'};
`;

export const TextError = styled.p`
  margin-top: 20px;
  font-size: 20px;
  text-align: center;
`;
