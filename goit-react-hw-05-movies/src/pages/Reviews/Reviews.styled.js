import styled from '@emotion/styled';

export const ReviewsBox = styled.div`
  padding: 15px;
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
`;

export const List = styled.ul`
  margin-top: 20px;
`;

export const Elements = styled.li`
  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const Autor = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  font-family: 'Orbitron', sans-serif;
`;

export const Text = styled.p`
  font-size: 20px;
  margin-top: 20px;
`;

export const Span = styled.span`
  font-weight: 700;
`;
