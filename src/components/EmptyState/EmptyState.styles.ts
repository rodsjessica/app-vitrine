import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) =>
    theme.typography.fontSize.lg}px;
  font-weight: ${({ theme }) =>
    theme.typography.fontWeight.bold};
  text-align: center;
  color: ${({ theme }) =>
    theme.colors.text};
`;

export const Description = styled.Text`
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
  font-size: ${({ theme }) =>
    theme.typography.fontSize.md}px;
  text-align: center;
  color: ${({ theme }) =>
    theme.colors.textSecondary};
`;