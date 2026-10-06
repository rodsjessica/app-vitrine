import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 24px;
`;

export const BannerWrapper = styled.Pressable`
  width: 360px;
  height: 160px;
  margin-right: 12px;
  border-radius: 16px;
  overflow: hidden;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 100%;
`;

export const IndicatorContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Indicator = styled.View`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.border};
  margin: 0 4px;
`;

export const ActiveIndicator = styled.View`
  width: 18px;
  height: 6px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 0 4px;
`;