import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CatalogScreen } from '../features/products/screens/CatalogScreen/CatalogScreen';
import { ProductDetailsScreen } from '../features/products/screens/ProductDetailsScreen/ProductDetailsScreen';
import type { Product } from '../features/products/types/Product';

export type RootStackParamList = {
  Catalog: undefined;
  ProductDetails: {
    product: Product;
  };
};

const Stack =
  createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Catalog"
        component={CatalogScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          title: 'Detalhes do produto',
        }}
      />
    </Stack.Navigator>
  );
}