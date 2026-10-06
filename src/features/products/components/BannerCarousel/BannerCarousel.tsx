import React from 'react';
import { FlatList } from 'react-native';

import { banners } from '../../data/banners';

import {
  Container,
  Banner,
  IndicatorContainer,
  Indicator,
  ActiveIndicator,
  BannerWrapper,
} from './BannerCarousel.styles';

type BannerCarouselProps = {
  onBannerPress?: (bannerId: string) => void;
};

export function BannerCarousel({ onBannerPress }: BannerCarouselProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleViewableItemsChanged: NonNullable<
    React.ComponentProps<typeof FlatList>['onViewableItemsChanged']
  > = ({ viewableItems }) => {
    const index = viewableItems[0]?.index;

    if (index !== null && index !== undefined) {
      setActiveIndex(index);
    }
  };

  const viewabilityConfig = React.useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  return (
    <Container>
      <FlatList
        data={banners}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <BannerWrapper onPress={() => onBannerPress?.(item.id)}>
            <Banner source={item.image} resizeMode="cover" />
          </BannerWrapper>
        )}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />

      <IndicatorContainer>
        {banners.map((banner, index) =>
          index === activeIndex ? (
            <ActiveIndicator key={banner.id} />
          ) : (
            <Indicator key={banner.id} />
          ),
        )}
      </IndicatorContainer>
    </Container>
  );
}