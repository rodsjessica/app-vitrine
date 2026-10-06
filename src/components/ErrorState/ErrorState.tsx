import React from 'react';

import { Button } from '../Button/Button';

import {
  Container,
  Title,
  Message,
} from './ErrorState.styles';

type ErrorStateProps = {
  message: string;
  onRetry: () => void;
};

export function ErrorState({
  message,
  onRetry,
}: ErrorStateProps) {
  return (
    <Container>
      <Title>Ops!</Title>

      <Message>{message}</Message>

      <Button
        title="Tentar novamente"
        onPress={onRetry}
      />
    </Container>
  );
}