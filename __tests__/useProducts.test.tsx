import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import { useProducts } from '../src/features/products/hooks/useProducts';

let hookResult: ReturnType<typeof useProducts>;

function TestComponent() {
  hookResult = useProducts();

  return null;
}

beforeEach(async () => {
  await ReactTestRenderer.act(async () => {
    ReactTestRenderer.create(<TestComponent />);
  });
});

test('carrega os produtos ao iniciar', () => {
  expect(hookResult.products).toHaveLength(5000);
  expect(hookResult.loading).toBe(false);
  expect(hookResult.error).toBeNull();
});

test('filtra produtos pela busca', async () => {
  await ReactTestRenderer.act(async () => {
    hookResult.setSearch('Notebook');
  });

  expect(hookResult.filteredProducts.length).toBeGreaterThan(0);

  expect(
    hookResult.filteredProducts.every(product =>
      product.name.toLowerCase().includes('notebook'),
    ),
  ).toBe(true);
});

test('filtra produtos por categoria', async () => {
  await ReactTestRenderer.act(async () => {
    hookResult.setSelectedCategory('Eletrônicos');
  });

  expect(hookResult.filteredProducts.length).toBeGreaterThan(0);

  expect(
    hookResult.filteredProducts.every(
      product => product.category === 'Eletrônicos',
    ),
  ).toBe(true);
});

test('retorna vazio quando a busca não encontra produtos', async () => {
  await ReactTestRenderer.act(async () => {
    hookResult.setSearch('produto-que-nao-existe');
  });

  expect(hookResult.filteredProducts).toHaveLength(0);
});