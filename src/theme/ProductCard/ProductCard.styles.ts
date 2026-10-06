import styled from 'styled-components/native';

type AvailabilityProps = {
  $available: boolean;
};

export const Card = styled.Pressable`
  flex: 1;

  margin: ${({ theme }) => theme.spacing.xs}px;
  padding: ${({ theme }) => theme.spacing.sm}px;

  background-color: ${({ theme }) =>
    theme.colors.surface};

  border-radius: ${({ theme }) =>
    theme.spacing.md}px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  aspect-ratio: 1;

  border-radius: ${({ theme }) =>
    theme.spacing.sm}px;

  background-color: ${({ theme }) =>
    theme.colors.borderLight};
`;

export const AvailabilityBadge = styled.View<AvailabilityProps>`
  align-self: flex-start;

  margin-top: ${({ theme }) => theme.spacing.sm}px;

  padding: ${({ theme }) => theme.spacing.xs}px
    ${({ theme }) => theme.spacing.sm}px;

  background-color: ${({ theme, $available }) =>
    $available
      ? theme.colors.successBackground
      : theme.colors.errorBackground};

  border-radius: ${({ theme }) =>
    theme.spacing.xl}px;
`;

export const AvailabilityText =
  styled.Text<AvailabilityProps>`
    font-size: ${({ theme }) =>
      theme.typography.fontSize.xs}px;

    font-weight: ${({ theme }) =>
      theme.typography.fontWeight.semibold};

    color: ${({ theme, $available }) =>
      $available
        ? theme.colors.success
        : theme.colors.error};
  `;

export const ProductName = styled.Text`
  margin-top: ${({ theme }) => theme.spacing.sm}px;

  font-size: ${({ theme }) =>
    theme.typography.fontSize.md}px;

  font-weight: ${({ theme }) =>
    theme.typography.fontWeight.semibold};

  color: ${({ theme }) =>
    theme.colors.text};
`;

export const ProductCategory = styled.Text`
  margin-top: ${({ theme }) => theme.spacing.xs}px;

  font-size: ${({ theme }) =>
    theme.typography.fontSize.sm}px;

  color: ${({ theme }) =>
    theme.colors.textSecondary};
`;

export const ProductPrice = styled.Text`
  margin-top: ${({ theme }) => theme.spacing.sm}px;

  font-size: ${({ theme }) =>
    theme.typography.fontSize.lg}px;

  font-weight: ${({ theme }) =>
    theme.typography.fontWeight.bold};

  color: ${({ theme }) =>
    theme.colors.text};
`;