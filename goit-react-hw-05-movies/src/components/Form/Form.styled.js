import styled from '@emotion/styled';

export const FormBox = styled.form`
  margin: 0 auto;
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  font-style: inherit;
  font-variant: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  line-height: inherit;
  font-family: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 5px 10px;
  text-align: center;
  margin: 0 auto;
  border-radius: 10px;
`;

export const Button = styled.button`
  background-color: transparent;
  position: absolute;
  top: 0;
  left: calc(100% + 5px);
`;
