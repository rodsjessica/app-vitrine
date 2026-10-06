import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) =>
    theme.colors.background};
`;

export const Content = styled.ScrollView`
  flex: 1;
`;

export const ProductImageContainer = styled.View`
  margin: ${({ theme }) => theme.spacing.md}px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.spacing.md}px;
  background-color: ${({ theme }) =>
    theme.colors.borderLight};
`;

export const ProductImage = styled.Image`
  width: 100%;
  aspect-ratio: 1;
`;

export const InfoContainer = styled.View`
  padding: 0 ${({ theme }) => theme.spacing.md}px
    ${({ theme }) => theme.spacing.xl}px;
`;

export const ProductName = styled.Text`
  font-size: ${({ theme }) =>
    theme.typography.fontSize.xxl}px;

  font-weight: ${({ theme }) =>
    theme.typography.fontWeight.bold};

  color: ${({ theme }) =>
    theme.colors.text};
`;

export const ProductCategory = styled.Text`
  margin-top: ${({ theme }) => theme.spacing.xs}px;

  font-size: ${({ theme }) =>
    theme.typography.fontSize.md}px;

  color: ${({ theme }) =>
    theme.colors.textSecondary};
`;

export const ProductPrice = styled.Text`
  margin-top: ${({ theme }) => theme.spacing.lg}px;

  font-size: ${({ theme }) =>
    theme.typography.fontSize.xl}px;

  font-weight: ${({ theme }) =>
    theme.typography.fontWeight.bold};

  color: ${({ theme }) =>
    theme.colors.primary};
`;

type AvailabilityProps = {
  $available: boolean;
};

export const AvailabilityBadge =
  styled.View<AvailabilityProps>`
    align-self: flex-start;

    margin-top: ${({ theme }) =>
      theme.spacing.md}px;

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
      theme.typography.fontSize.sm}px;

    font-weight: ${({ theme }) =>
      theme.typography.fontWeight.semibold};

    color: ${({ theme, $available }) =>
      $available
        ? theme.colors.success
        : theme.colors.error};
  `;

export const DescriptionSection = styled.View`
  margin-top: ${({ theme }) =>
    theme.spacing.xl}px;

  padding-top: ${({ theme }) =>
    theme.spacing.lg}px;

  border-top-width: 1px;

  border-top-color: ${({ theme }) =>
    theme.colors.border};
`;

export const DescriptionTitle = styled.Text`
  font-size: ${({ theme }) =>
    theme.typography.fontSize.lg}px;

  font-weight: ${({ theme }) =>
    theme.typography.fontWeight.bold};

  color: ${({ theme }) =>
    theme.colors.text};
`;

export const Description = styled.Text`
  margin-top: ${({ theme }) =>
    theme.spacing.sm}px;

  font-size: ${({ theme }) =>
    theme.typography.fontSize.md}px;

  line-height: 24px;

  color: ${({ theme }) =>
    theme.colors.textSecondary};
`;