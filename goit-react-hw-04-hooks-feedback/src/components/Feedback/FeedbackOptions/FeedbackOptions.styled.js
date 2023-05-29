import styled from '@emotion/styled';

export const List = styled.ul`
  width: 100%;
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;

export const Elements = styled.li`
  flex-basis: calc(100% / 3);
  color: red;

  &:first-of-type {
    color: green;
  }

  &:nth-of-type(2) {
    color: blue;
  }
`;

export const Button = styled.button`
  background: rgba(0, 0, 0, 0);
  border-bottom: 1px solid;
  color: white;
  padding: 0.25em;
  text-decoration: none;

  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  line-height: 2.81;
  margin: 0 0 2em;
  max-width: 160px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;

  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, 0.5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

  &:hover {
    position: absolute;
    color: inherit;

    border: 1px solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
  }
`;
