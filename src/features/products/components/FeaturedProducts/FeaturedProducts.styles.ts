import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 24px;
`;

export const Title = styled.Text`
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const ListContainer = styled.View`
  height: 320px;
  margin-right: -16px;
`;

export const FeaturedCard = styled.View`
  width: 150px;
  margin-right: 12px;
`;