import React from 'react';

import { Button } from '../Button/Button';

import {
  Container,
  Title,
  Description,
} from './EmptyState.styles';

type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel: string;
  onAction: () => void;
};

export function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <Container>
      <Title>{title}</Title>

      <Description>
        {description}
      </Description>

      <Button
        title={actionLabel}
        onPress={onAction}
      />
    </Container>
  );
}