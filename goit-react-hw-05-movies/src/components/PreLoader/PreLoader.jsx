import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { FakeLoader, Spinner, Cube1, Cube2 } from './PreLoader.styled';

export const PreLoader = () => {
  const [loader, setLoader] = useState(true);
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    window.addEventListener('load', preLoader);

    return () => {
      window.removeEventListener('load', preLoader);
    };
  }, []);

  function preLoader() {
    setAnimation(true);
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }

  return createPortal(
    loader && (
      <FakeLoader go={animation}>
        <Spinner>
          <Cube1></Cube1>
          <Cube2></Cube2>
        </Spinner>
      </FakeLoader>
    ),
    document.querySelector('#pre-loader')
  );
};
