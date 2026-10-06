import React from 'react';

import {
  Container,
  Spinner,
  Message,
} from './Loading.styles';

type LoadingProps = {
  message?: string;
};

export function Loading({
  message = 'Carregando produtos...',
}: LoadingProps) {
  return (
    <Container>
      <Spinner />
      <Message>{message}</Message>
    </Container>
  );
}