import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import { isIos } from '../../utils/browser';

const Modal: React.FC = () => {
  const [ios, setIos] = useState(false);

  useEffect(() => {
    const iosMode = isIos();
    setIos(iosMode);
  }, []);

  return (
    <>
      {ios && (
        <Container>
          <h1>Hello</h1>
        </Container>
      )}
    </>
  );
};

export default Modal;
