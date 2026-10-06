import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Logo = styled.Image`
  width: 140px;
  height: 140px;

  margin-bottom: ${({ theme }) =>
    theme.spacing.md}px;
`;

export const Title = styled.Text`
  font-size: 36px;

  font-weight: ${({ theme }) =>
    theme.typography.fontWeight.bold};

  color: #1F2937;
`;

export const Subtitle = styled.Text`
  margin-top: ${({ theme }) =>
    theme.spacing.sm}px;

  font-size: ${({ theme }) =>
    theme.typography.fontSize.sm}px;

  letter-spacing: 2px;

  color: #64748B;

  text-align: center;
`;