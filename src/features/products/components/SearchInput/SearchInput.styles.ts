import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  height: 52px;

  padding: 0 ${({ theme }) =>
    theme.spacing.md}px;

  background-color: ${({ theme }) =>
    theme.colors.surface};

  border-width: 1px;

  border-color: ${({ theme }) =>
    theme.colors.border};

  border-radius: ${({ theme }) =>
    theme.spacing.md}px;
`;

export const Input = styled.TextInput`
  flex: 1;

  font-size: ${({ theme }) =>
    theme.typography.fontSize.md}px;

  color: ${({ theme }) =>
    theme.colors.text};
`;