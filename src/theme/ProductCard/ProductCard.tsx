import React, { memo } from 'react';

import type { Product } from '../../features/products/types/Product';
import { formatCurrency } from '../../utils/formatCurrency';

import {
  Card,
  ProductImage,
  AvailabilityBadge,
  AvailabilityText,
  ProductName,
  ProductCategory,
  ProductPrice,
} from './ProductCard.styles';

type ProductCardProps = {
  product: Product;
  onPress: (product: Product) => void;
};

function ProductCardComponent({
  product,
  onPress,
}: ProductCardProps) {
  return (
    <Card
      onPress={() => onPress(product)}
      accessibilityRole="button"
      accessibilityLabel={`Ver detalhes de ${product.name}`}>
      <ProductImage
        source={{ uri: product.imageUrl }}
        resizeMode="cover"
      />

      <AvailabilityBadge
        $available={product.available}>
        <AvailabilityText
          $available={product.available}>
          {product.available
            ? 'Disponível'
            : 'Indisponível'}
        </AvailabilityText>
      </AvailabilityBadge>

      <ProductName numberOfLines={2}>
        {product.name}
      </ProductName>

      <ProductCategory numberOfLines={1}>
        {product.category}
      </ProductCategory>

      <ProductPrice>
        {formatCurrency(product.price)}
      </ProductPrice>
    </Card>
  );
}

export const ProductCard = memo(ProductCardComponent);