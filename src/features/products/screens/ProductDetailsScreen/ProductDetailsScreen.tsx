import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../../../../navigation/AppNavigator';
import { formatCurrency } from '../../../../utils/formatCurrency';

import {
  Container,
  Content,
  ProductImageContainer,
  ProductImage,
  InfoContainer,
  ProductName,
  ProductCategory,
  ProductPrice,
  AvailabilityBadge,
  AvailabilityText,
  DescriptionSection,
  DescriptionTitle,
  Description,
} from './ProductDetailsScreen.styles';

type ProductDetailsScreenProps =
  NativeStackScreenProps<
    RootStackParamList,
    'ProductDetails'
  >;

export function ProductDetailsScreen({
  route,
}: ProductDetailsScreenProps) {
  const { product } = route.params;

  return (
    <Container>
      <Content>
        <ProductImageContainer>
          <ProductImage
            source={{ uri: product.imageUrl }}
            resizeMode="cover"
          />
        </ProductImageContainer>

        <InfoContainer>
          <ProductName>
            {product.name}
          </ProductName>

          <ProductCategory>
            {product.category}
          </ProductCategory>

          <ProductPrice>
            {formatCurrency(product.price)}
          </ProductPrice>

          <AvailabilityBadge
            $available={product.available}>
            <AvailabilityText
              $available={product.available}>
              {product.available
                ? 'Disponível'
                : 'Indisponível'}
            </AvailabilityText>
          </AvailabilityBadge>

          <DescriptionSection>
            <DescriptionTitle>
              Descrição
            </DescriptionTitle>

            <Description>
              {product.description}
            </Description>
          </DescriptionSection>
        </InfoContainer>
      </Content>
    </Container>
  );
}