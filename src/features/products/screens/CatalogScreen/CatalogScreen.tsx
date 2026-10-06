import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { EmptyState } from '../../../../components/EmptyState/EmptyState';
import { ErrorState } from '../../../../components/ErrorState/ErrorState';
import { Loading } from '../../../../components/Loading/Loading';

import type { RootStackParamList } from '../../../../navigation/AppNavigator';

import { BannerCarousel } from '../../components/BannerCarousel/BannerCarousel';
import { CategoryFilter } from '../../components/CategoryFilter/CategoryFilter';
import { FeaturedProducts } from '../../components/FeaturedProducts/FeaturedProducts';
import { ProductList } from '../../components/ProductList/ProductList';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import type { Product } from '../../types/Product';
import { useProducts } from '../../hooks/useProducts';

import {
  Container,
  Content,
  Header,
  Title,
  ResultsContainer,
  Greeting,
} from './CatalogScreen.styles';

type CatalogScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Catalog'
>;

export function CatalogScreen({
  navigation,
}: CatalogScreenProps) {
  const {
    products,
    filteredProducts,
    categories,
    search,
    selectedCategory,
    loading,
    error,
    setSearch,
    setSelectedCategory,
    reload,
  } = useProducts();

  console.log("QTD DE PRODUTOS: ========>", products)

  const handleProductPress = (product: Product) => {
    navigation.navigate('ProductDetails', {
      product,
    });
  };

  const handleClearFilters = () => {
    setSearch('');
    setSelectedCategory(null);
  };

  const isHome =
    search.trim().length === 0 &&
    selectedCategory === null;

  const isShowingResults =
    search.trim().length > 0 ||
    selectedCategory !== null;

  return (
    <Container>
      <Content>
        <Header>
          <Greeting>Olá! 👋</Greeting>

          <Title>Encontre o que você precisa</Title>

          <SearchInput
            value={search}
            onChangeText={setSearch}
          />
        </Header>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {loading ? (
          <ResultsContainer>
            <Loading />
          </ResultsContainer>
        ) : error ? (
          <ResultsContainer>
            <ErrorState
              message={error}
              onRetry={reload}
            />
          </ResultsContainer>
        ) : isHome ? (
          <>
            <FeaturedProducts
              products={products}
              onProductPress={handleProductPress}
            />

            <BannerCarousel />
          </>
        ) : isShowingResults ? (
          <ResultsContainer>
            {filteredProducts.length === 0 ? (
              <EmptyState
                title="Nenhum produto encontrado"
                description="Tente alterar sua busca ou categoria."
                actionLabel="Voltar para início"
                onAction={handleClearFilters}
              />
            ) : (
              <ProductList
                products={filteredProducts}
                onProductPress={handleProductPress}
              />
            )}
          </ResultsContainer>
        ) : null}
      </Content>
    </Container>
  );
}