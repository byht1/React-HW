import styled from '@emotion/styled';
import { keyframes } from '@emotion/css';

const cubemove = keyframes`

  25% {
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
    transform: translateX(42px) rotate(-90deg) scale(0.5);
  }

  50% {
    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
    transform: translateX(42px) translateY(42px) rotate(-179deg);
  }

  50.1% {
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
    transform: translateX(42px) translateY(42px) rotate(-180deg);
  }

  75% {
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
  }

  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
`;

export const FakeLoader = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  z-index: 9999999999;
  background-color: #000;
  opacity: 1;

  transition: opacity 500ms linear;

  & {
    opacity: ${props => props.go && 0};
  }
`;

export const Spinner = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  top: calc(50% - 50px / 2);
  left: calc(50% - 50px / 2);
`;

export const Cube1 = styled.div`
  background-color: #fff;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-animation: ${cubemove} 1.8s infinite ease-in-out;
  animation: ${cubemove} 1.8s infinite ease-in-out;
`;

export const Cube2 = styled(Cube1)`
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
`;
