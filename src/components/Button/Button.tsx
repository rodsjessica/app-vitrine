import React from 'react';

import {
  Container,
  Label,
  LoadingIndicator,
} from './Button.styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export function Button({
  title,
  onPress,
  disabled = false,
  loading = false,
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Container
      onPress={onPress}
      disabled={isDisabled}
      $disabled={isDisabled}
    >
      {loading ? (
        <LoadingIndicator />
      ) : (
        <Label>{title}</Label>
      )}
    </Container>
  );
}