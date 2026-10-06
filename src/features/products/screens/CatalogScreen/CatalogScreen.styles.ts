import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) =>
    theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 16px;
`;

export const Header = styled.View`
  padding-top: ${({ theme }) => theme.spacing.lg}px;
  padding-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

export const Greeting = styled.Text`
  font-size: ${({ theme }) =>
    theme.typography.fontSize.md}px;

  font-weight: ${({ theme }) =>
    theme.typography.fontWeight.medium};

  color: ${({ theme }) =>
    theme.colors.textSecondary};
`;

export const Title = styled.Text`
  margin-top: ${({ theme }) =>
    theme.spacing.xs}px;

  margin-bottom: ${({ theme }) =>
    theme.spacing.lg}px;

  font-size: ${({ theme }) =>
    theme.typography.fontSize.xxl}px;

  font-weight: ${({ theme }) =>
    theme.typography.fontWeight.bold};

  color: ${({ theme }) =>
    theme.colors.text};
`;

export const ResultsContainer = styled.View`
  flex: 1;
  margin-top: ${({ theme }) => theme.spacing.md}px;
`;