import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0 15px;
`;

export const Fon = styled.div`
  min-height: 100vh;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
`;
