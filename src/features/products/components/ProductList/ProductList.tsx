import React, { useCallback } from 'react';
import { FlatList } from 'react-native';

import type { Product } from '../../types/Product';
import { ProductCard } from '../../../../theme/ProductCard/ProductCard';

type ProductListProps = {
  products: Product[];
  onProductPress: (product: Product) => void;
};

export function ProductList({
  products,
  onProductPress,
}: ProductListProps) {

  const renderItem = useCallback(
    ({ item }: { item: Product }) => (
      <ProductCard
        product={item}
        onPress={onProductPress}
      />
    ),
    [onProductPress],
  );

  const keyExtractor = useCallback(
    (item: Product) => item.id,
    [],
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      numColumns={2}
      showsVerticalScrollIndicator={false}
    />
  );
}