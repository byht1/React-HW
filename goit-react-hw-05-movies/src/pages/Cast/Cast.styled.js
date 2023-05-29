import styled from '@emotion/styled';

export const GridBox = styled.ul`
  grid-gap: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  list-style: none;
  margin: 0 auto;
  margin-top: 20px;
  max-width: calc(100vw - 48px);
  padding: 0;
`;

export const Img = styled.img`
  max-height: 330px;
`;

export const Elements = styled.li`
  align-items: center;
  border-radius: 10px;
  color: #a8a8a8;
  /* display: flex; */
  /* flex-direction: column; */
  font-size: 16px;
  font-weight: 500;
  height: 100%;
  /* justify-content: space-between; */
  overflow: hidden;
`;

export const BoxName = styled.div`
  padding: 10px 5px;
  text-align: center;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.p`
  font-size: 20px;
  border-bottom: 2px solid #fff;
`;
