import React, { useCallback, useMemo } from 'react';
import { FlatList } from 'react-native';

import type { Product } from '../../types/Product';

import {
  Container,
  Title,
  ListContainer,
  FeaturedCard,
} from './FeaturedProducts.styles';
import { ProductCard } from '../../../../theme/ProductCard/ProductCard';

type FeaturedProductsProps = {
  products: Product[];
  onProductPress: (product: Product) => void;
};

export function FeaturedProducts({
  products,
  onProductPress,
}: FeaturedProductsProps) {
  const featuredProducts = useMemo(
    () => products.filter(product => product.available).slice(0, 10),
    [products],
  );

  const renderItem = useCallback(
    ({ item }: { item: Product }) => (
      <FeaturedCard>
        <ProductCard
          product={item}
          onPress={onProductPress}
        />
      </FeaturedCard>
    ),
    [onProductPress],
  );

  const keyExtractor = useCallback(
    (item: Product) => item.id,
    [],
  );

  return (
    <Container>
      <Title>Produtos em destaque para conhecer</Title>

      <ListContainer>
        <FlatList
          data={featuredProducts}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </ListContainer>
    </Container>
  );
}