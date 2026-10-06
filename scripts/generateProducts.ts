/// <reference types="node" />

import fs from 'node:fs';
import path from 'node:path';

import type { Product } from '../src/features/products/types/Product';

const TOTAL_PRODUCTS = 5000;

const productsTemplate = [
  {
    name: 'Smartphone Galaxy',
    category: 'Eletrônicos',
    imageUrl:
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97',
  },
  {
    name: 'Fone Bluetooth',
    category: 'Eletrônicos',
    imageUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
  },
  {
    name: 'Notebook Pro',
    category: 'Informática',
    imageUrl:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
  },
  {
    name: 'Monitor UltraWide',
    category: 'Informática',
    imageUrl:
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf',
  },
  {
    name: 'Smartwatch Fit',
    category: 'Acessórios',
    imageUrl:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
  },
  {
    name: 'Teclado Mecânico',
    category: 'Acessórios',
    imageUrl:
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3',
  },
  {
    name: 'Câmera Digital',
    category: 'Fotografia',
    imageUrl:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
  },
  {
    name: 'Mouse sem Fio',
    category: 'Acessórios',
    imageUrl:
      'https://images.unsplash.com/photo-1527814050087-3793815479db',
  },
  {
    name: 'Console Game',
    category: 'Games',
    imageUrl:
      'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3',
  },
  {
    name: 'Caixa de Som',
    category: 'Eletrônicos',
    imageUrl:
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1',
  },
];

const products: Product[] = [];

for (let i = 1; i <= TOTAL_PRODUCTS; i++) {
  const template =
    productsTemplate[
    (i - 1) % productsTemplate.length
    ];

  const product: Product = {
    id: String(i),

    name: `${template.name} ${i}`,

    description:
      `Descrição do ${template.name.toLowerCase()} ${i}.`,

    price: Number(
      (50 + ((i * 137.5) % 2000)).toFixed(2),
    ),

    imageUrl: template.imageUrl,

    category: template.category,

    available: i % 5 !== 0,
  };

  products.push(product);
}

const outputPath = path.join(
  process.cwd(),
  'src/features/products/data/products.json',
);

fs.writeFileSync(
  outputPath,
  JSON.stringify(products, null, 2),
  'utf-8',
);

console.log(
  `Produtos gerados: ${products.length}`,
);

console.log(
  `Arquivo: ${outputPath}`,
);