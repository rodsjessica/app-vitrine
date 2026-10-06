import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.ActivityIndicator.attrs(
  ({ theme }) => ({
    color: theme.colors.primary,
    size: 'large',
  }),
)``;

export const Message = styled.Text`
  margin-top: ${({ theme }) => theme.spacing.md}px;
  font-size: ${({ theme }) =>
    theme.typography.fontSize.md}px;
  color: ${({ theme }) =>
    theme.colors.textSecondary};
`;