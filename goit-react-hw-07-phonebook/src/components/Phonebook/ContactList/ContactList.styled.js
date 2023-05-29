import styled from '@emotion/styled';
import Skeleton from '../Loader/Skeleton';

export const PreLoader = styled(Skeleton)`
  margin-top: 20px;
`;

export const List = styled.ul`
  margin-top: 20px;
  display: grid;
  gap: 15px;
`;

export const Elements = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NameContacts = styled.p`
  font-size: 1.2em;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
