import styled from 'styled-components/native';

type ContainerProps = {
  $disabled: boolean;
};

export const Container = styled.Pressable<ContainerProps>`
  min-height: 48px;

  align-items: center;
  justify-content: center;

  padding: 0 ${({ theme }) => theme.spacing.md}px;

  background-color: ${({ theme, $disabled }) =>
    $disabled
      ? theme.colors.disabled
      : theme.colors.primary};

  border-radius: ${({ theme }) =>
    theme.spacing.sm}px;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) =>
    theme.typography.fontSize.md}px;

  font-weight: ${({ theme }) =>
    theme.typography.fontWeight.semibold};

  color: ${({ theme }) =>
    theme.colors.surface};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(
  ({ theme }) => ({
    color: theme.colors.surface,
  }),
)``;