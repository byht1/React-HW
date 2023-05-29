import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ListLink = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const LinkA = styled(Link)`
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

export const Section = styled.section`
  padding: 20px 0;
`;

export const ContainerMovie = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const InfoMovie = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  font-size: 26px;
  color: white;
`;

export const Img = styled.img`
  width: 350px;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const TextDecoration = styled.span`
  font-weight: 700;
  text-decoration: underline;
`;

export const ButtonGoBack = styled.button`
  position: fixed;
  top: 30px;
  left: 30px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  color: white;
  background-color: transparent;
  font-size: 16px;
  font-family: 'Orbitron', sans-serif;
`;
